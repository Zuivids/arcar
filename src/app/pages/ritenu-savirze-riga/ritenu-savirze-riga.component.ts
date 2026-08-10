import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ritenu-savirze-riga',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './ritenu-savirze-riga.component.html',
  styleUrl: './ritenu-savirze-riga.component.scss',
})
export class RitenuSavirzeRigaComponent {}
