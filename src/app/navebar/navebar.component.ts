import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navebar',
  imports: [RouterModule],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.scss',
  standalone: true,
})
export class NavebarComponent {}
