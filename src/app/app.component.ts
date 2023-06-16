import {Component, EventEmitter, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-website';

  dragX: number;



  onWheel(event: WheelEvent) {
    var element = document.getElementById('experience');
    if(element == null) return;
    element.scrollLeft = element.scrollLeft + event.deltaY + event.deltaX;
    event.preventDefault();
  }

  onDrag(event: DragEvent) {
    if(event.screenX == 0 && event.screenY == 0) return;
    var element = document.getElementById('experience');
    if(element == null) return;
    element.scrollLeft = element.scrollLeft + this.dragX - event.offsetX;
  }

  setDragX(event: DragEvent) {
    this.dragX = event.offsetX;
  }

}
