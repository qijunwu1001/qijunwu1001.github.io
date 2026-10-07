export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Array<Certificates>;
  publications: Array<Publications>;
  manuscriptsUnderReview: Array<ManuscriptsUnderReview>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

interface Basics {
  name: string;
  label?: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  aboutMe?: Array<string>;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  startDate?: DateStr;
  endDate?: DateStr | null;
  summary: string;
  responsibilities?: Highlight;
  skills?: Array<string>;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate?: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publications {
  authors: Array<{ name: string; isSelf?: boolean }>;
  name: string;
  publisher: string;
  volume: string;
  issue: string;
  pages: string;
  releaseDate: DateStr;
  url: string;
  doi: string;
}

interface ManuscriptsUnderReview {
  authors: Array<{ name: string; isSelf?: boolean }>;
  name: string;
  year: string;
  journal: string;
  status: string;
}

interface Education {
  institution: string;
  url: string;
  logo?: string;
  logoMode?: "contain" | "crop-left";
  area: string;
  studyType: string;
  degree?: string;
  startDate?: DateStr;
  endDate?: DateStr | null;
  endDateExpected?: boolean;
  displayPeriod?: string;
  score?: string;
  courses?: Array<string>;
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Projects {
  name: string;
  image?: string;
  isActive: boolean;
  description?: string;
  highlights?: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Highlight = Array<String>;
