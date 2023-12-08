import { Pipe, PipeTransform } from '@angular/core';

interface WeekDay {
  short: string;
  medium: string;
  full: string;
}

const weekDaysEn = [
  { short: 'M', medium: 'Mon', full: 'Monday' },
  { short: 'Tu', medium: 'Tue', full: 'Tuesday' },
  { short: 'W', medium: 'Wed', full: 'Wednesday' },
  { short: 'Th', medium: 'Thu', full: 'Thursday' },
  { short: 'F', medium: 'Fri', full: 'Friday' },
  { short: 'Sa', medium: 'Sat', full: 'Saturday' },
  { short: 'Su', medium: 'Sun', full: 'Sunday' },
];

@Pipe({
  name: 'weekDays',
  standalone: true,
})
export class WeekDayNamePipe implements PipeTransform {
  transform(
    value: number,
    type: 'short' | 'medium' | 'full' = 'short'
  ): string {
    return this.setDay(value, type);
  }

  private setDay(value: number, type: string): string {
    return weekDaysEn[value][type as keyof WeekDay];
  }
}
