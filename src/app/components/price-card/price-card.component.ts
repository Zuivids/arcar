import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface PriceCardTitleLine {
  key: string;
  accent?: boolean;
  big?: boolean;
}

export interface PriceCardOffer {
  icon: string;
  titleKey: string;
  descKey?: string;
  priceLabelKey?: string;
  price: string;
  unitKey?: string;
  noteKey?: string;
}

// Price list poster as HTML (used in the hero next to the page title)
@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
})
export class PriceCardComponent {
  @Input({ required: true }) titleLines: PriceCardTitleLine[] = [];
  @Input({ required: true }) subtitleKeys: string[] = [];
  @Input({ required: true }) offers: PriceCardOffer[] = [];
  @Input() showFooter = false;
  // Off when titles contain case-sensitive names (e.g. R134a)
  @Input() uppercaseTitles = true;

  perks = [
    { icon: 'settings',      key: 'dpf.perk1' },
    { icon: 'build',         key: 'dpf.perk2' },
    { icon: 'verified_user', key: 'dpf.perk3' },
  ];
}
