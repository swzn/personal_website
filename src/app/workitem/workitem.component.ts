import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit{

  @Input()
  name: string;

  @Input()
  duration: string;

  @Input()
  ref: string;

  @Input()
  role: string;

  @Input()
  stack: string[];

  ngOnInit(): void {
    if(this.ref === undefined) {
      this.ref = "#experience";
    }
  }

}
