import {Component, Input} from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input()
  logo: string;

  @Input()
  color: number;

  @Input()
  name: string;
}
