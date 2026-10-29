import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lukturu-regulesana-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './lukturu-regulesana-riga.component.html',
  styleUrl: './lukturu-regulesana-riga.component.scss',
})
export class LukturuRegulesanaRigaComponent {}
