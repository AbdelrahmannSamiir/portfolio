import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
}
