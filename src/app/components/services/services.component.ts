import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
  icon: string;
  titleKey: string;
  descKey: string;
  delay: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: Service[] = [
    { icon: 'build',                 titleKey: 'services.s1_title', descKey: 'services.s1_desc', delay: '0s'   },
    { icon: 'tire_repair',           titleKey: 'services.s2_title', descKey: 'services.s2_desc', delay: '0.1s' },
    { icon: 'local_fire_department', titleKey: 'services.s3_title', descKey: 'services.s3_desc', delay: '0.2s' },
    { icon: 'car_repair',            titleKey: 'services.s4_title', descKey: 'services.s4_desc', delay: '0.1s' },
    { icon: 'computer',              titleKey: 'services.s5_title', descKey: 'services.s5_desc', delay: '0.2s' },
    { icon: 'oil_barrel',            titleKey: 'services.s6_title', descKey: 'services.s6_desc', delay: '0.3s' },
    { icon: 'emergency_heat',        titleKey: 'services.s7_title', descKey: 'services.s7_desc', delay: '0.2s' },
    { icon: 'link',                  titleKey: 'services.s8_title', descKey: 'services.s8_desc', delay: '0.3s' },
    { icon: 'settings',              titleKey: 'services.s9_title', descKey: 'services.s9_desc', delay: '0.4s' },
  ];
}
