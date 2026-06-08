import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-kondicionieru-uzpilde-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './kondicionieru-uzpilde-riga.component.html',
  styleUrl: './kondicionieru-uzpilde-riga.component.scss',
})
export class KondicioneruUzpildeRigaComponent {}
