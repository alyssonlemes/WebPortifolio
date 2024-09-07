export class Education {
  public readonly languages?: string[];
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly institution: string;
  public readonly studyType: string;
  public readonly description: string;

  constructor(
    startDate: string,
    endDate: string,
    institution: string,
    studyType: string,
    description: string,
    languages?: string[]
  ) {
    this.languages = languages;
    this.startDate = startDate;
    this.endDate = endDate;
    this.institution = institution;
    this.studyType = studyType;
    this.description = description;
  }
}
