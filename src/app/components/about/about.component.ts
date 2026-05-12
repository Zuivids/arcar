import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  stats = [
    { valueKey: 'about.stat1_value', labelKey: 'about.stat1_label' },
    { valueKey: 'about.stat2_value', labelKey: 'about.stat2_label' },
    { valueKey: 'about.stat3_value', labelKey: 'about.stat3_label' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
