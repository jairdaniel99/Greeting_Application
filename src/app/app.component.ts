import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// a component is like an HTML element with its own template, styles and logic
// Use the @Component decorator to define a component and its metadata
@Component({
  selector: 'app-root', // CSS selector we use to refer to this component in an html file
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // path to html template file
  styleUrl: './app.component.css', // path to css file
})
export class AppComponent {
  title = 'Angular';
  studentName = 'Jair';
}
