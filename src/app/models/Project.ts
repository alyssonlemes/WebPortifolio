import { Languages } from '../enums/ELanguage';

export class Project {
  private _id: number;
  private _title: string;
  private _description: string;
  private _languages: Languages[];
  private _githubLink?: string;
  private _websiteLink?: string;

  constructor(
    id: number,
    title: string,
    description: string,
    languages: Languages[],
    githubLink?: string,
    websiteLink?: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._languages = languages;
    this._githubLink = githubLink;
    this._websiteLink = websiteLink;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get languages(): Languages[] {
    return this._languages;
  }

  get githubLink(): string | undefined {
    return this._githubLink;
  }

  get websiteLink(): string | undefined {
    return this._websiteLink;
  }
}
