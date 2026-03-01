import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Curso } from './components/curso/curso';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Curso],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
