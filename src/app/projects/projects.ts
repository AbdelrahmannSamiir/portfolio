import { Component } from '@angular/core';

interface Project {
  title: string;
  class: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    { title: 'WEB DESIGN', class: 'cards__item-odd upper' },
    { title: 'MOBILE DESIGN', class: 'cards__item-even upper' },
    { title: 'LOGO DESIGN', class: 'cards__item-odd upper' },
    { title: 'WEB APPLICATION DEVELOPMENT', class: 'cards__item-even' },
    { title: 'MOBILE APPLICATION DEVELOPMENT', class: 'cards__item-odd' },
    { title: 'PWA DEVELOPMENT', class: 'cards__item-even' },
  ];
}
