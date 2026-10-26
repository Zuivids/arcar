import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-amerikas-auto-detalas-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './amerikas-auto-detalas-riga.component.html',
  styleUrl: './amerikas-auto-detalas-riga.component.scss',
})
export class AmerikasAutoDetalasRigaComponent {}
