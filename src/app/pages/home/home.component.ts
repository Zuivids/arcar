import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { VacanciesComponent } from '../../components/vacancies/vacancies.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyUsComponent,
    VacanciesComponent,
    ContactComponent,
  ],
  template: `
    <main>
      <section id="home"><app-hero></app-hero></section>
      <section id="about"><app-about></app-about></section>
      <section id="services"><app-services></app-services></section>
      <section id="whyus"><app-why-us></app-why-us></section>
      <section id="vacancies"><app-vacancies></app-vacancies></section>
      <section id="contact"><app-contact></app-contact></section>
    </main>
  `,
})
export class HomeComponent {}
