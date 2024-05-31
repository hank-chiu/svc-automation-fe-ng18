import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rule-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-list.component.html',
  styleUrl: './rule-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuleListComponent {}
