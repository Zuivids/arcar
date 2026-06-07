import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  langSvc = inject(LanguageService);
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

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(id: string): void {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth <= 1024 ? 96 : 116;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
