export interface MaterialComponent {
  name: string;
  documentSource?: string;
}

export interface MaterialContentList {
  id: number;
  title: string;
  list: MaterialComponent[];
}

export interface OrderMessage {
  Name: string;
  Surname: string;
  Company: string;
  Email: string;
  ContactNumber: string;
  Message: string;
}
