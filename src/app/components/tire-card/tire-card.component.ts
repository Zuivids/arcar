import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface TirePriceRow {
  size: string;
  set: string;
  single: string;
  pair: string;
}

// Tire fitting price list with the DPF test offer (used in the hero above the price cards)
@Component({
  selector: 'app-tire-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './tire-card.component.html',
  styleUrl: './tire-card.component.scss',
})
export class TireCardComponent {
  rows: TirePriceRow[] = [
    { size: 'R15', set: '45.00', single: '15.00', pair: '26.00' },
    { size: 'R16', set: '49.00', single: '16.00', pair: '28.00' },
    { size: 'R17', set: '55.00', single: '16.00', pair: '32.00' },
    { size: 'R18', set: '58.00', single: '18.00', pair: '34.00' },
    { size: 'R19', set: '60.00', single: '20.00', pair: '40.00' },
    { size: 'R20', set: '65.00', single: '21.00', pair: '42.00' },
    { size: 'R21', set: '70.00', single: '23.00', pair: '46.00' },
  ];

  subtitleKeys = ['tires.sub_1', 'tires.sub_2', 'tires.sub_3'];

  perks = [
    { icon: 'settings',      key: 'dpf.perk1' },
    { icon: 'build',         key: 'dpf.perk2' },
    { icon: 'verified_user', key: 'dpf.perk3' },
  ];
}
