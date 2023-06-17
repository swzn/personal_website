import {AfterContentInit, Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements AfterContentInit {

  @Input()
  name: string;

  @Input()
  link: string;

  @Input()
  githubLink: string;

  @Input()
  docsLink: string;

  @Input()
  skills: { [key: string]: number };


  constructor(private renderer2: Renderer2, private ref:ElementRef) {
    this.renderer2.listen('window', 'scroll', (e) => this.renderBox());
  }

   renderBox():void {
     const top_diff: number = this.ref.nativeElement.getBoundingClientRect().top - window.innerHeight;
     const bottom_diff: number = this.ref.nativeElement.getBoundingClientRect().bottom;
     if (top_diff < 0 && -200 <= top_diff) {
       const val= 1 - (top_diff + 200) / 200;
       this.ref.nativeElement.style.opacity = val > 0.95 ? 1 : val;
     }
     else if (bottom_diff < 200 && 0 <= bottom_diff) {
       const val: number = (bottom_diff) / 200;
       this.ref.nativeElement.style.opacity = val;
     }
     else if (this.ref.nativeElement.getBoundingClientRect().bottom < window.innerHeight
     || this.ref.nativeElement.getBoundingClientRect().top > 0){
       this.ref.nativeElement.style.opacity = 1;
     }
  }

  ngAfterContentInit() {
    this.renderBox();
  }

  getSkills(): [string, number][] {
    if(!this.skills) return [];
    return Object.entries(this.skills);
  }
}
