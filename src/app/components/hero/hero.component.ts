import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { PriceCardComponent } from '../price-card/price-card.component';
import { AC_OFFERS, AC_SUBTITLE, AC_TITLE, DPF_OFFERS, DPF_SUBTITLE, DPF_TITLE } from '../price-card/price-lists';
import { TireCardComponent } from '../tire-card/tire-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, PriceCardComponent, TireCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private langSvc = inject(LanguageService);

  dpfTitle = DPF_TITLE;
  dpfSubtitle = DPF_SUBTITLE;
  dpfOffers = DPF_OFFERS;

  acTitle = AC_TITLE;
  acSubtitle = AC_SUBTITLE;
  acOffers = AC_OFFERS;

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1024 ? 96 : 116;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
