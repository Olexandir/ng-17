import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ChunkPipe } from '../../pipes/chunk.pipe';
import { ColourDayDirective } from '../../directives/colour-day.directive';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'month',
  standalone: true,
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  imports: [DatePipe, ChunkPipe, ColourDayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MonthComponent {
  @Input() public month!: any;

  public identify(index: number, item: any): any {
    return item?.name ?? index;
  }
}
