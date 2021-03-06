import { OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { UsageReportService } from '../../core/statistics/usage-report-data.service';
import { map, switchMap } from 'rxjs/operators';
import { UsageReport } from '../../core/statistics/models/usage-report.model';
import { RemoteData } from '../../core/data/remote-data';
import { getRemoteDataPayload, getSucceededRemoteData, redirectOn404Or401 } from '../../core/shared/operators';
import { DSpaceObject } from '../../core/shared/dspace-object.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DSONameService } from '../../core/breadcrumbs/dso-name.service';

/**
 * Class representing an abstract statistics page component.
 */
export abstract class StatisticsPageComponent<T extends DSpaceObject> implements OnInit {

  /**
   * The scope dso for this statistics page, as an Observable.
   */
  scope$: Observable<DSpaceObject>;

  /**
   * The report types to show on this statistics page.
   */
  types: string[];

  /**
   * The usage report types to show on this statistics page, as an Observable list.
   */
  reports$: Observable<UsageReport[]>;

  hasData$: Observable<boolean>;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected usageReportService: UsageReportService,
    protected nameService: DSONameService,
  ) {
  }

  ngOnInit(): void {
    this.scope$ = this.getScope$();
    this.reports$ = this.getReports$();
    this.hasData$ = this.reports$.pipe(
      map((reports) => reports.some(
        (report) => report.points.length > 0
      )),
    );
  }

  /**
   * Get the scope dso for this statistics page, as an Observable.
   */
  protected getScope$(): Observable<DSpaceObject> {
    return this.route.data.pipe(
      map((data) => data.scope as RemoteData<T>),
      redirectOn404Or401(this.router),
      getSucceededRemoteData(),
      getRemoteDataPayload(),
    );
  }

  /**
   * Get the usage reports for this statistics page, as an Observable list
   */
  protected getReports$(): Observable<UsageReport[]> {
    return this.scope$.pipe(
      switchMap((scope) =>
        combineLatest(
          this.types.map((type) => this.usageReportService.getStatistic(scope.id, type))
        ),
      ),
    );
  }

  /**
   * Get the name of the scope dso.
   * @param scope the scope dso to get the name for
   */
  getName(scope: DSpaceObject): string {
    return this.nameService.getName(scope);
  }
}
