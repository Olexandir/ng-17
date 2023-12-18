import { Component } from '@angular/core';
import { SpendCalculationComponent } from './components/spend-calculation/spend-calculation.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { totalOptions } from './calc.interface';

@Component({
  standalone: true,
  templateUrl: './java-test-page.component.html',
  styleUrls: ['./java-test-page.component.scss'],
  imports: [
    SpendCalculationComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class JavaTestPageComponent {
  public form!: FormGroup;

  public spCalcOptions = {} as totalOptions;

  ngOnInit(): void {
    this.form = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
      positions: new FormControl(),
      hours_per_day: new FormControl(),
      rate: new FormControl(),
    });

    this.form.valueChanges.subscribe((v) => (this.spCalcOptions = { ...v }));
  }
}
