export interface MaterialComponent {
  name: string;
  documentSource?: string;
}

export interface MaterialContentList {
  id: number;
  title: string;
  list: MaterialComponent[];
}
