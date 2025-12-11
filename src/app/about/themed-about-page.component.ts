import { Component } from '@angular/core';

import { ThemedComponent } from '../shared/theme-support/themed.component';
import { AboutComponent } from './about-page.component';

/**
 * Themed wrapper for AboutComponent
 */
@Component({
  selector: 'ds-about',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [
    AboutComponent,
  ],
})
export class ThemedAboutComponent extends ThemedComponent<AboutComponent> {
  protected getComponentName(): string {
    return 'AboutComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/about/about-page.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./about-page.component');
  }
}
