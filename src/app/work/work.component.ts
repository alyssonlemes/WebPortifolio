import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Languages } from '../enums/ELanguage';
import { Language } from '../models/Language';
import { LanguagesLevel } from '../enums/ELanguageLevel';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  public projects: Project[] = [];
  public languages: Language[] = [];

  ngOnInit() {
    this.setProjects();
    this.setLanguages();
  }

  public setProjects() {
    const cardapio = new Project(
      1,
      'Menu API',
      'A small personal project, consisting of the creation of a REST API coded exclusively in Java with Spring Boot framework to manage the registration of supplies and food in a restaurant..',
      [Languages.Java, Languages.SpringBoot, Languages.PostgreSQL],
      'https://github.com/alyssonlemes/Cardapio_API',
    );
    const crudreact = new Project(
      3,
      'Library CRUD',
      'This project is a CRUD with React, VITE and TypeScript. It is a university project responsible for creating a list based on registered books.',
      [Languages.React, Languages.Vite, Languages.TypeScript],
      'https://github.com/alyssonlemes/React-Vite-Crud'
    );
    const portfolio = new Project(
      4,
      'Portfolio',
      'This is this website. It is a personal project based on the portifolio of the Julien Thême .',
      [
        Languages.Angular, Languages.TailwindCSS, Languages.TypeScript],
      'https://github.com/ZIRTR0X/PersonalWebsite',
    );
    

    this.projects.push(
      cardapio,
      crudreact,
      portfolio
      
    );
  }

  public setLanguages() {
    const typescript = new Language(
      1,
      Languages.TypeScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'I use it in my work-study projects, and in my personal projects.',
      LanguagesLevel.Beginner
    );
    
    const angular = new Language(
      4,
      Languages.Angular,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'I recently started studying and I intend to apply it to my study projects.',
      LanguagesLevel.Beginner
    );
    const git = new Language(
      5,
      Languages.Git,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'I use it in all my projects to constantly stay up to date on version control concepts.',
      LanguagesLevel.Intermediate
    );
    const html = new Language(
      6,
      Languages.HTML,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'I have used it since my technical education up to the present.',
      LanguagesLevel.Intermediate
    );
    const css = new Language(
      7,
      Languages.CSS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'I have used it since my technical education up to the present.',
      LanguagesLevel.Intermediate
    );
    const javascript = new Language(
      8,
      Languages.JavasScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'I use js in most of my university projects.',
      LanguagesLevel.Intermediate
    );
    const java = new Language(
      9,
      Languages.Java,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'I use it in university and work-study projects, especially with de Spring boot framework',
      LanguagesLevel.Intermediate
    );
    const csharp = new Language(
      10,
      Languages.CSharp,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'I use in study projects.',
      LanguagesLevel.Beginner
    );
    const ReactNative = new Language(
      13,
      Languages.React,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'I use it in my personal and university projects.',
      LanguagesLevel.Intermediate
    );
    this.languages.push(
      java,
      angular,
      ReactNative,
      git,
      typescript,
      csharp,
      html,
      css,
      javascript
    );
  }
}
