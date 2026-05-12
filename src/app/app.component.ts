import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyUsComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
