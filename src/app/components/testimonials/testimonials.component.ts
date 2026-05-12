import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
  nameKey: string;
  roleKey: string;
  textKey: string;
  rating: number;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    { nameKey: 'testimonials.t1_name', roleKey: 'testimonials.t1_role', textKey: 'testimonials.t1_text', rating: 5, initials: 'AB' },
    { nameKey: 'testimonials.t2_name', roleKey: 'testimonials.t2_role', textKey: 'testimonials.t2_text', rating: 5, initials: 'KO' },
    { nameKey: 'testimonials.t3_name', roleKey: 'testimonials.t3_role', textKey: 'testimonials.t3_text', rating: 5, initials: 'MK' },
    { nameKey: 'testimonials.t4_name', roleKey: 'testimonials.t4_role', textKey: 'testimonials.t4_text', rating: 5, initials: 'IL' },
  ];

  activeIndex = 0;
  private autoplayTimer?: ReturnType<typeof setInterval>;

  get stars(): number[] {
    return Array(5).fill(0);
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.autoplayTimer = setInterval(() => this.next(), 5000);
  }

  stopAutoplay(): void {
    if (this.autoplayTimer) clearInterval(this.autoplayTimer);
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.stopAutoplay();
    this.startAutoplay();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }
}
