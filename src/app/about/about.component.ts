import { Component } from '@angular/core';
import { Experience } from '../models/Experience';
import { Language } from '../models/Language';
import { Languages } from '../enums/ELanguage';
import { Education } from '../models/Education';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience[] = [
    new Experience(
      [
        Languages.Genexus,
        Languages.Oracle,
        Languages.PostgreSQL,
        Languages.Net,
        Languages.CSharp
      ],
      'Sep 2024',
      'Currently',
      'SIL Sistemas',
      'Junior Software Developer',
      'Development of a web application with Genexus, C# and relational databases. I conducted code reviews and prototyping of screens'
    ),
    new Experience(
      [
        Languages.Genexus,
        Languages.React,
        Languages.PostgreSQL,
        Languages.Net,
        Languages.CSharp
      ],
      'Jan 2024',
      'Sep 2024',
      'CHB Sistemas',
      'Software Developer',
      'Development of a web application with Genexus, C# and relational databases. '
    ),
    new Experience(
      [
        Languages.Html,
        Languages.MicrosoftSQLServer,
        Languages.Css
      ],
      'Abr. 2023',
      'Set 2023',
      'N2 Sistemas e Soluções LTDA',
      'Junior Support Analist',
      'Provide assistance and guidance to clients experiencing difficulties or system failures in the ERP, perform version testing, and manage databases using Microsoft SQL Server.'
    ),
    new Experience(
      [
        Languages.Hardware,
        Languages.Customer,
      ],
      'Apr 2022',
      'Jun 2022',
      'Lemes Informatica',
      'Internship IT technician',
      "Development of web applications using A-FRAME, a framework based on Three.js. The apps can be used ''normally'', but also with VR headsets."
    ),
  ];

  public educations: Education[] = [
    new Education(
      'Jan 2023',
      'Currently',
      'Centro Universitário Municipal de Franca - UNIFACEF',
      'Second year of a computer science degree',
      ''
    ),
    new Education(
      'Jan 2019',
      'Nov 2021',
      'ETEC Dr. Júlio Cardoso',
      'Systems development Technologist',
      ''
    )
  ];
}
