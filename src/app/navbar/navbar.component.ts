import {
  Component,
  Injector,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app.reducer';
import { isAuthenticated } from '../core/auth/selectors';
import { BrowseService } from '../core/browse/browse.service';
import { AuthorizationDataService } from '../core/data/feature-authorization/authorization-data.service';
import { slideMobileNav } from '../shared/animations/slide';
import { HostWindowService } from '../shared/host-window.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { MenuService } from '../shared/menu/menu.service';
import { MenuID } from '../shared/menu/menu-id.model';
import { ThemeService } from '../shared/theme-support/theme.service';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
})
export class NavbarComponent extends MenuComponent {
  /**
   * The menu ID of the Navbar is PUBLIC
   * @type {MenuID.PUBLIC}
   */
  menuID = MenuID.PUBLIC;

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated$: Observable<boolean>;

  public isXsOrSm$: Observable<boolean>;

  constructor(protected menuService: MenuService,
    protected injector: Injector,
              public windowService: HostWindowService,
              public browseService: BrowseService,
              public authorizationService: AuthorizationDataService,
              public route: ActivatedRoute,
              protected themeService: ThemeService,
              private store: Store<AppState>,
  ) {
    super(menuService, injector, authorizationService, route, themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.isXsOrSm$ = this.windowService.isXsOrSm();
    this.isAuthenticated$ = this.store.pipe(select(isAuthenticated));
  }
}
