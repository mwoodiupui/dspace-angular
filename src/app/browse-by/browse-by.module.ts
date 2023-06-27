import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedBrowseByModule } from '../shared/browse-by/shared-browse-by.module';
import { ComcolModule } from '../shared/comcol/comcol.module';
import { DsoPageModule } from '../shared/dso-page/dso-page.module';
import { FormModule } from '../shared/form/form.module';
import { BrowseByDatePageComponent } from './browse-by-date-page/browse-by-date-page.component';
import { ThemedBrowseByDatePageComponent } from './browse-by-date-page/themed-browse-by-date-page.component';
import { BrowseByMetadataPageComponent } from './browse-by-metadata-page/browse-by-metadata-page.component';
import { ThemedBrowseByMetadataPageComponent } from './browse-by-metadata-page/themed-browse-by-metadata-page.component';
import { BrowseBySwitcherComponent } from './browse-by-switcher/browse-by-switcher.component';
import { ThemedBrowseBySwitcherComponent } from './browse-by-switcher/themed-browse-by-switcher.component';
import { BrowseByTaxonomyPageComponent } from './browse-by-taxonomy-page/browse-by-taxonomy-page.component';
import { ThemedBrowseByTaxonomyPageComponent } from './browse-by-taxonomy-page/themed-browse-by-taxonomy-page.component';
import { BrowseByTitlePageComponent } from './browse-by-title-page/browse-by-title-page.component';
import { ThemedBrowseByTitlePageComponent } from './browse-by-title-page/themed-browse-by-title-page.component';

const ENTRY_COMPONENTS = [
  // put only entry components that use custom decorator
  BrowseByTitlePageComponent,
  BrowseByMetadataPageComponent,
  BrowseByDatePageComponent,
  BrowseByTaxonomyPageComponent,

  ThemedBrowseByMetadataPageComponent,
  ThemedBrowseByDatePageComponent,
  ThemedBrowseByTitlePageComponent,
  ThemedBrowseByTaxonomyPageComponent,
];

@NgModule({
  imports: [
    SharedBrowseByModule,
    CommonModule,
    ComcolModule,
    DsoPageModule,
    FormModule,
  ],
  declarations: [
    BrowseBySwitcherComponent,
    ThemedBrowseBySwitcherComponent,
    ...ENTRY_COMPONENTS,
  ],
  exports: [
    BrowseBySwitcherComponent,
  ],
})
export class BrowseByModule {
  /**
   * NOTE: this method allows to resolve issue with components that using a custom decorator
   * which are not loaded during SSR otherwise
   */
  static withEntryComponents() {
    return {
      ngModule: SharedBrowseByModule,
      providers: ENTRY_COMPONENTS.map((component) => ({provide: component})),
    };
  }
}
