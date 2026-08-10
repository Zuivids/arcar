import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ta-sagatavosana-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './ta-sagatavosana-riga.component.html',
  styleUrl: './ta-sagatavosana-riga.component.scss',
})
export class TaSagatavosanaRigaComponent {}
