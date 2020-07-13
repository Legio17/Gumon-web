export interface MaterialComponent {
  name: string;
  documentSource?: string;
}

export interface MaterialContentList {
  id: number;
  title: string;
  list: MaterialComponent[];
  images: string[];
}

export interface OrderMessage {
  Name: string;
  Surname: string;
  Company: string;
  Email: string;
  ContactNumber: string;
  Message: string;
}

export interface NewsPost {
  date: string;
  content: string;
}
