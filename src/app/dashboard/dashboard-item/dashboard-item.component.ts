import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // option 1
  // @Input({required: true}) image!: {src: string, alt: string};
  // @Input({required: true}) title!: string;

  // option 2 - angular 17 and later
  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();
}
