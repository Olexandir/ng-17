import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  standalone: true,
  pure: true,
})
export class ChunkPipe implements PipeTransform {
  transform(value: any[], chunkSize: number): any[] {
    const calendarDays: any[] = [];
    let weekDays: any[] = [];

    value.map((day, index) => {
      weekDays.push(day);
      if (++index % chunkSize === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });
    return calendarDays;
  }
}
