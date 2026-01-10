import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { Footer } from './shared/components/footer/footer';
import { Imprint } from './imprint/imprint';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MainContent,
    Footer,
    Imprint],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
