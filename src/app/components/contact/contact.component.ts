import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  success = false;
  loading = false;
  error = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      phone:   ['', [Validators.required]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  hasError(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = false;

    if (this.form.valid) {
      this.loading = true;
      const { name, phone, email, message } = this.form.value;

      const body = { name, email, phone, message, _subject: `Jauns pieprasījums no ${name}` };
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' });

      this.http.post('https://formsubmit.co/ajax/siaarcar@gmail.com', body, { headers }).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.form.reset();
          this.submitted = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        },
      });
    }
  }
}
