export interface CommandType {
  key: string;
  desc: string;
}

export interface SectionType {
  title: string;
  commands: CommandType[];
}

export interface PageType {
  title: string;
  icon: React.ReactNode;
  color: string;
  sections: SectionType[];
}