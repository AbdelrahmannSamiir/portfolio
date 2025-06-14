import { Component } from '@angular/core';

interface Skill {
  title: string;
  class: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { title: 'HTML', class: 'loading1' },
    { title: 'CSS', class: 'loading2' },
    { title: 'JavaScript', class: 'loading3' },
    { title: 'React', class: 'loading4' },
    { title: 'Photoshop', class: 'loading5' },
    { title: 'Adobe XD', class: 'loading6' },
    { title: 'Node.js', class: 'loading7' },
    { title: 'WordPress', class: 'loading8' },
  ];

  jobs: string[] = [
    'ui/ux Design',
    'Responsive Design',
    'Web Design',
    'Mobile App Design',
  ];
}
