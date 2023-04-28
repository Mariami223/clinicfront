import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('overlay', { static: true }) overlay!: ElementRef;
  showForm = false;

  constructor() {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (this.showForm) {
      const clickedInside = this.overlay.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.closeOverlay();
      }
    }
  }

  closeOverlay() {
    this.showForm = false;
  }

  onButtonClick() {
    this.showForm = true;
  }
}
