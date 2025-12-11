import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'ds-base-about',
    styleUrls: ['about-page.component.scss'],
    templateUrl: 'about-page.component.html',
    standalone: true,
    imports: [TranslateModule],
})
export class AboutComponent{
}
