import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  langSvc = inject(LanguageService);
  router  = inject(Router);
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { key: 'nav.home',         id: 'home' },
    { key: 'nav.about',        id: 'about' },
    { key: 'nav.services',     id: 'services' },
    { key: 'nav.whyus',        id: 'whyus' },
    { key: 'nav.vacancies',    id: 'vacancies' },
    { key: 'nav.contact',      id: 'contact' },
  ];

  // Line 2 — dedicated service pages (own routes, not home-page anchors)
  routeLinks = [
    { label: 'Kondicionieru uzpilde',         path: '/kondicionieru-uzpilde-riga' },
    { label: 'Riteņu savirze',                path: '/ritenu-savirze-riga' },
    { label: 'TA sagatavošana',               path: '/ta-sagatavosana-riga' },
    { label: 'Auto pārdošana',                path: '/auto-pardosanas-serviss-riga' },
    { label: 'ASV auto detaļas',              path: '/amerikas-auto-detalas-riga' },
    { label: 'ASV reģ. / sertifikācija',      path: '/amerikas-auto-registracija-sertifikacija-riga' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(id: string): void {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1185 ? 96 : 162;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // Not on home page — navigate there and let anchorScrolling handle it
      this.router.navigate(['/'], { fragment: id });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
