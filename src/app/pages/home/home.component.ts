import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  projects = [
    {
      slug: 'LMS',
      title: 'LMS Platform',
      description: 'Predict student performance using ML-powered analytics.',
      tech: ['Angular', 'Spring Boot', 'ML']
    },
    {
      slug: 'CAPEX',
      title: 'CAPEX Management Platform',
      description: 'Designed and developed a CAPEX management application (COIN APP).', 
      tech: ['Power Apps', 'Power Automate', 'Power Bi' ,'SharePoint']
}
  ];

  goToProjects() {
    this.router.navigate(['/projects']);
  }
  getProject(slug: string) {
  this.router.navigate(['/projects', slug]);
}
}