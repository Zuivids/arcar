import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { PriceCardComponent, PriceCardOffer, PriceCardTitleLine } from '../price-card/price-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, PriceCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private langSvc = inject(LanguageService);

  // DPF price list
  dpfTitle: PriceCardTitleLine[] = [
    { key: 'dpf.title_1', accent: true, big: true },
    { key: 'dpf.title' },
  ];
  dpfSubtitle = ['dpf.subtitle'];
  dpfOffers: PriceCardOffer[] = [
    { icon: 'troubleshoot', titleKey: 'dpf.o1_title', descKey: 'dpf.o1_desc', priceLabelKey: 'dpf.from',       price: '30.00'  },
    { icon: 'recycling',    titleKey: 'dpf.o2_title', descKey: 'dpf.o2_desc', priceLabelKey: 'dpf.from',       price: '199.00' },
    { icon: 'filter_alt',   titleKey: 'dpf.o3_title', descKey: 'dpf.o3_desc', priceLabelKey: 'dpf.price_from', price: '250.00', noteKey: 'dpf.o3_note' },
  ];

  // A/C refill price list
  acTitle: PriceCardTitleLine[] = [
    { key: 'ku.title_1' },
    { key: 'ku.title_2', accent: true },
    { key: 'ku.title_3' },
  ];
  acSubtitle = ['ku.sub_1', 'ku.sub_2', 'ku.sub_3'];
  acOffers: PriceCardOffer[] = [
    { icon: 'speed',   titleKey: 'ku.c1_title', descKey: 'ku.card_c1_desc', price: '25.00' },
    { icon: 'ac_unit', titleKey: 'ku.c2_title', price: '7',  unitKey: 'ku.per_100g' },
    { icon: 'eco',     titleKey: 'ku.c3_title', price: '20', unitKey: 'ku.per_100g' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1024 ? 96 : 116;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
