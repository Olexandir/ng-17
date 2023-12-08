import { Component } from '@angular/core';
import { Month } from './interfaces/calendar.interface';
import { MonthComponent } from './components/month/month.component';
import { MonthNamePipe } from './pipes/month-name.pipe';
import { WeekDayNamePipe } from './pipes/week-day-name.pipe';

@Component({
  standalone: true,
  imports: [MonthComponent, MonthNamePipe, WeekDayNamePipe],
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent {
  public months: Month[] = [];
  public month!: Month;
  public weekDays = [0, 1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
    this.createMonth();
  }

  private createMonth(
    year: number = new Date().getFullYear(),
    month: number = new Date().getMonth()
  ): void {
    const date = new Date(year, month);
    const days = new Array(42).fill(null);
    const mDays = [];

    while (date.getMonth() === month) {
      mDays.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    days.splice(mDays[0].getDay() - 1, mDays.length, ...mDays);

    this.month = { year, month, days };

    console.log(this.month);
  }
}
