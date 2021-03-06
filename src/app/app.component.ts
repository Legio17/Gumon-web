import { Component } from '@angular/core';

interface PageNavigation {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gumon';

  listOfNav: PageNavigation[] = [
    {
      link: '/',
      name: 'Domov',
      exact: true,
    },
    {
      link: '/news',
      name: 'Novinky',
      exact: true,
    },
    {
      link: '/material/0',
      name: 'Materiál',
      exact: true,
    },
    {
      link: '/material-processing',
      name: 'Opracovanie materiálov',
      exact: true,
    },
    {
      link: '/order',
      name: 'Dopyt',
      exact: true,
    },
    {
      link: '/location',
      name: 'Lokácia',
      exact: true,
    },
    {
      link: '/contact',
      name: 'Kontakt',
      exact: true,
    },
  ];
}
