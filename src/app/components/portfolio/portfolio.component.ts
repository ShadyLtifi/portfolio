import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectModalComponent } from "../project-modal/project-modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,ProjectCardComponent, ProjectModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedProject: Project | null = null;

onViewProject(project: Project) {
  this.selectedProject = project;
}
projects: Project[] = [
{
  id: 'capex',
  title: 'CAPEX Management Platform',
  description: `Cloud-based solution built using Microsoft Power Platform. 
Designed and developed a CAPEX management application (COIN APP). 
Analyzed business requirements and translated them into technical solutions. 
Built workflows and dashboards using Power Platform tools to improve data visualization and process automation. 
Implemented automated budget calculation for large projects, where the budget is dynamically updated upon expense approval.`,

  technologies: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint'],

  image: [
    {
      src: 'assets/images/DepAct.png',
      description: 'Activity Acceptance and Expense Diagram'
    },
    {
      src: 'assets/images/EcranProjet.jpg',
      description: 'Project Interface'
    },
    {
      src: 'assets/images/EcranSp.jpg',
      description: 'Sub-project Interface'
    },
    {
      src: 'assets/images/EcranDP.jpg',
      description: 'Expense Interface'
    },
    {
      src: 'assets/images/d.jpg',
      description: 'Dashboard Interface'
    }
  ],

  features: [
    'Automated workflows for approval processes',
    'Dynamic dashboard reporting and visualization',
    'CAPEX tracking and management',
    'Automated budget calculation for projects upon expense approval'
  ]
},
  {
  id: 'job-platform',
  title: 'Job Platform',
  description: `Recruitment platform built with Angular and Spring Boot. 
Designed and developed a professional job offer management system, including system architecture and structured development using Agile methodologies.`,
  
  technologies: ['Angular v18', 'Spring Boot', 'Spring Security', 'MongoDB', 'Jira', 'Git'],

  image: [
    {
      src: 'assets/images/log.jpg',
      description: 'Login Interface'
    },
    {
      src: 'assets/images/addofr.jpg',
      description: 'Add Job Offer Interface'
    },
    {
      src: 'assets/images/cnd.jpg',
      description: 'Recruiter Dashboard - Candidate Applications List'
    },
    {
      src: 'assets/images/adexp.jpg',
      description: 'Add Experience Interface'
    },
    {
      src: 'assets/images/candidatEspace.jpg',
      description: 'Candidate Dashboard'
    },
    {
      src: 'assets/images/lstexp.jpg',
      description: 'Candidate Profile Experience List'
    }
  ],

  features: [
    'User authentication and authorization (Spring Security)',
    'Job offer creation and management',
    'Candidate application tracking and management'
  ]
}
];


}
