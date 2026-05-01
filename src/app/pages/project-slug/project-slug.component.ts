import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact?: string;
  context?: string;
  role?: string;
  tech: string[];
  image: string;
  video?: string;
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-project-slug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-slug.component.html',
  styleUrls: ['./project-slug.component.css']
})
export class ProjectSlugComponent {

  project?: Project;

  constructor(private route: ActivatedRoute) {}


  projects: Project[] = [
    {
      slug: 'LMS',
      title: 'LMS Platform with Predictive Analytics',
      description: 'Full-stack LMS with data-driven insights and performance prediction.',

      problem: 'Educational systems lack early detection of students at risk, making intervention difficult.',

      solution: 'Developed a full-stack LMS using Angular and Spring Boot, integrated with MongoDB. Applied data mining techniques and regression models to predict student performance based on study behavior.',

      impact: 'Enabled early identification of struggling students and improved academic decision-making.',

      context: 'Developed in an Agile Scrum team of 3, collaborating on sprint planning and feature delivery.',

      role: 'Implemented authentication using Spring Security and developed the regression model for performance prediction.',

      tech: ['Angular', 'Spring Boot', 'MongoDB', 'Machine Learning', 'Data Mining'],

      image: 'assets/images/lmsphoto.png',
      video: 'assets/images/LMS.mp4',

    },
  {

      slug: 'CAPEX',
      title: 'CAPEX Management Platform (COIN App)',

      description: 'Cloud-based CAPEX management solution for budget planning, workflow automation, and financial visibility across large-scale projects.',

      problem: 'CAPEX processes lacked visibility on budgets for large-scale projects, making tracking and decision-making difficult. Manual processes were time-consuming, error-prone, and lacked real-time insights.',

      solution: 'Designed and developed a CAPEX management application using Microsoft Power Platform. Built Power Apps interfaces, automated budget workflows using Power Automate, and integrated SharePoint as a data source. Implemented structured approval flows and centralized budget tracking to improve financial visibility and control.',

      impact: 'Improved visibility on project budgets, reduced manual processing, and enabled faster and more reliable financial decision-making.',

      context: 'Developed during a 6-month internship at Delice Holding, collaborating with business stakeholders to gather requirements and deliver a tailored solution.',

      role: 'Analyzed business requirements, designed the functional architecture, developed the Power Apps solution, automated workflows with Power Automate, and implemented reporting dashboards.',

      tech: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint'],

      image: 'assets/images/capex.png',
      video: 'assets/images/vdpfe.mp4'
    }]


  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.project = this.projects.find(p => p.slug === slug);
  }
}