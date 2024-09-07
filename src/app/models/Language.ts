import { LanguagesLevel } from '../enums/ELanguageLevel';

export class Language {
  private _id: number;
  private _name: string;
  private _icon: string;
  private _description: string;
  private _level: LanguagesLevel;

  constructor(
    id: number,
    name: string,
    icon: string,
    description: string,
    level: LanguagesLevel
  ) {
    this._id = id;
    this._name = name;
    this._icon = icon;
    this._description = description;
    this._level = level;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get icon(): string {
    return this._icon;
  }

  get description(): string {
    return this._description;
  }

  get level(): LanguagesLevel {
    return this._level;
  }
}
