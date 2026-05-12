import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Feature {
  icon: string;
  titleKey: string;
  descKey: string;
  delay: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  features: Feature[] = [
    { icon: 'military_tech',           titleKey: 'whyus.f1_title', descKey: 'whyus.f1_desc', delay: '0s'   },
    { icon: 'precision_manufacturing', titleKey: 'whyus.f2_title', descKey: 'whyus.f2_desc', delay: '0.1s' },
    { icon: 'speed',                   titleKey: 'whyus.f3_title', descKey: 'whyus.f3_desc', delay: '0.2s' },
    { icon: 'verified',                titleKey: 'whyus.f4_title', descKey: 'whyus.f4_desc', delay: '0.1s' },
    { icon: 'price_check',             titleKey: 'whyus.f5_title', descKey: 'whyus.f5_desc', delay: '0.2s' },
    { icon: 'person',                  titleKey: 'whyus.f6_title', descKey: 'whyus.f6_desc', delay: '0.3s' },
  ];
}
