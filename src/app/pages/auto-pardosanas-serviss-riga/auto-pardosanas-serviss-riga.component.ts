import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auto-pardosanas-serviss-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './auto-pardosanas-serviss-riga.component.html',
  styleUrl: './auto-pardosanas-serviss-riga.component.scss',
})
export class AutoPardosanasServissRigaComponent {}
