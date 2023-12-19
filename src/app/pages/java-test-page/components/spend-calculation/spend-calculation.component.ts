import { Component, Input, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { totalOptions } from '../../calc.interface';
import { DatePipe } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'spend-calculation',
  standalone: true,
  templateUrl: './spend-calculation.component.html',
  styleUrls: ['./spend-calculation.component.scss'],
  imports: [MatTableModule, DatePipe],
})
export class SpendCalculationComponent {
  @Input() public spCalcOptions: totalOptions = {} as totalOptions;

  public tableDataSource: totalOptions[] = [];

  public days: number = 0;
  public total: number = 0;

  public columns: string[] = [
    'Period',
    'Positions',
    'Days',
    'Hours',
    'Rate',
    'Total',
  ];

  public footerColumns: string[] = ['Total'];

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource = [this.spCalcOptions];
    this.days = moment(this.spCalcOptions.end).diff(
      this.spCalcOptions.start,
      'days'
    );
    this.total =
      this.days *
      (this.spCalcOptions?.hours_per_day || 1) *
      (this.spCalcOptions.rate || 1);
  }
  ngOnInit(): void {}
}
