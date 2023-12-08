import { Pipe, PipeTransform } from '@angular/core';

interface MonthName {
  short: string;
  full: string;
}

const monthNamesEn = [
  { short: 'Jan', full: 'January' },
  { short: 'Feb', full: 'February' },
  { short: 'Mar', full: 'March' },
  { short: 'Apr', full: 'April' },
  { short: 'May', full: 'May' },
  { short: 'Jun', full: 'June' },
  { short: 'Jul', full: 'July' },
  { short: 'Aug', full: 'August' },
  { short: 'Sep', full: 'September' },
  { short: 'Oct', full: 'October' },
  { short: 'Nov', full: 'November' },
  { short: 'Dec', full: 'December' },
];

@Pipe({
  name: 'monthName',
  standalone: true,
})
export class MonthNamePipe implements PipeTransform {
  transform(value: number, type: 'short' | 'full'): string {
    console.log(value);

    return this.setMonth(value, type);
  }

  private setMonth(value: number, type: string): string {
    return monthNamesEn[value][type as keyof MonthName];
  }
}
