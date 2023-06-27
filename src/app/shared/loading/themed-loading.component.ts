import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Input,
} from '@angular/core';

import { ThemeService } from '../theme-support/theme.service';
import { ThemedComponent } from '../theme-support/themed.component';
import { LoadingComponent } from './loading.component';

/**
 * Themed wrapper for LoadingComponent
 */
@Component({
  selector: 'ds-themed-loading',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedLoadingComponent extends ThemedComponent<LoadingComponent> {

  @Input() message: string;
  @Input() showMessage: boolean;
  @Input() spinner: boolean;

  protected inAndOutputNames: (keyof LoadingComponent & keyof this)[] = ['message', 'showMessage', 'spinner'];

  constructor(
    protected resolver: ComponentFactoryResolver,
    protected cdr: ChangeDetectorRef,
    protected themeService: ThemeService,
  ) {
    super(resolver, cdr, themeService);
  }

  protected getComponentName(): string {
    return 'LoadingComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/shared/loading/loading.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./loading.component');
  }
}
