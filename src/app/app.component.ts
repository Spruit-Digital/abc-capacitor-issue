import { Component } from '@angular/core';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonIcon],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translate.addLangs(['en', 'nl']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
}
