import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PriceCardComponent } from '../../components/price-card/price-card.component';
import { DPF_OFFERS, DPF_SUBTITLE, DPF_TITLE } from '../../components/price-card/price-lists';

@Component({
  selector: 'app-dpf-pakalpojumi-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule, PriceCardComponent],
  templateUrl: './dpf-pakalpojumi-riga.component.html',
  styleUrl: './dpf-pakalpojumi-riga.component.scss',
})
export class DpfPakalpojumiRigaComponent {
  dpfTitle = DPF_TITLE;
  dpfSubtitle = DPF_SUBTITLE;
  dpfOffers = DPF_OFFERS;
}
