import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
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
    if (this.form.valid) {
      this.success = true;
      this.form.reset();
      this.submitted = false;
    }
  }
}
