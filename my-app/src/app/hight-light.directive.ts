import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit{
  @HostBinding('style.fontSize') myFontSize: string;
  @HostBinding('style.color') myColor: string;
  @HostBinding('style.backgroundColor') myBackgroundColor: string;

  constructor( ) { }

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myFontSize = '50px';
    this.myColor = 'red';
    this.myBackgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myFontSize = '30px';
    this.myColor = 'black';
    this.myBackgroundColor = 'transparent';
  }
}