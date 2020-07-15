import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  ngOnInit(): void {}

  onClickLinkMap() {
    console.log('google map');
    window.open(
      'https://www.google.com/maps/dir//Z%C3%A1ti%C5%A1ie+2,+Bratislava,+Slovensko/@48.1727977,17.1395744,17.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476c8ec0a440a3b3:0xdad4968a0ade3479!2m2!1d17.1407084!2d48.1728134!3e3',
      '_blank'
    );
  }
}
