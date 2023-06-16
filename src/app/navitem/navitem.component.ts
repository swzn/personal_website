import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-item',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})
export class NavitemComponent {

  @Input()
  link: string;

  @Input()
  name: string;

  @Input()
  disableClick: boolean;

  @Input()
  imgUrl: string;
  constructor() {

  }

  moveToTag(event: MouseEvent) {
    if(!this.link.startsWith("#")) return;
    event.preventDefault();
    const element = document.getElementById(this.link.substring(1));
    if(element == null) return;
    const scrollSpot = element.getBoundingClientRect().top + window.pageYOffset - 65;
    window.scrollTo({
      top: scrollSpot,
      behavior: 'smooth'
    });
  }
}
