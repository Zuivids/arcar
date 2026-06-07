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
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1024 ? 96 : 116;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
