import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navLinks = [
    { labelKey: 'nav.home',         id: 'home' },
    { labelKey: 'nav.about',        id: 'about' },
    { labelKey: 'nav.services',     id: 'services' },
    { labelKey: 'nav.whyus',        id: 'whyus' },
    { labelKey: 'nav.vacancies',    id: 'vacancies' },
    { labelKey: 'nav.contact',      id: 'contact' },
  ];

  serviceLinks = [
    'footer.fs1', 'footer.fs2', 'footer.fs3',
    'footer.fs4', 'footer.fs5', 'footer.fs6',
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1024 ? 80 : 116;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
