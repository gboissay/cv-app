import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  standalone: false,
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  constructor(private translate: TranslateService) {
    // Définir la langue par défaut
    translate.setDefaultLang('fr');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
