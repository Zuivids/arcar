import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<'lv' | 'ru'>('lv');

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('lv');
    this.translate.use('lv');
  }

  toggle(): void {
    const next = this.currentLang() === 'lv' ? 'ru' : 'lv';
    this.currentLang.set(next);
    this.translate.use(next);
  }

  setLang(lang: 'lv' | 'ru'): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }
}
