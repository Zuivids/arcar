import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface GalleryItem {
  labelKey: string;
  icon: string;
  gradient: string;
  size: 'normal' | 'wide' | 'tall';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  items: GalleryItem[] = [
    { labelKey: 'gallery.img1', icon: 'workspace_premium',     gradient: 'g1', size: 'wide' },
    { labelKey: 'gallery.img2', icon: 'build',                 gradient: 'g2', size: 'normal' },
    { labelKey: 'gallery.img3', icon: 'car_repair',            gradient: 'g3', size: 'normal' },
    { labelKey: 'gallery.img4', icon: 'computer',              gradient: 'g4', size: 'normal' },
    { labelKey: 'gallery.img5', icon: 'tire_repair',           gradient: 'g5', size: 'normal' },
    { labelKey: 'gallery.img6', icon: 'emergency_heat',        gradient: 'g6', size: 'wide' },
  ];
}
