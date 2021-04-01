// Usage: svg([icon]="'logo-strokes'", type="stroke")
import { Component, ViewEncapsulation, HostBinding, OnInit, Input } from '@angular/core';

type IconType = 'fill' | 'stroke' | '';

@Component({
  selector: 'svg[icon]',
  template: `<svg:use [attr.xlink:href]="iconHref"/>`,
  styleUrls: ['./svg-sprite.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgSpriteComponent implements OnInit {
  @Input() icon: string;
  @Input() type: IconType = 'fill';
  @HostBinding('class.icon') classIcon: boolean = true;
  @HostBinding('class.icon--fill')
  @Input()
  classFill: boolean;
  @HostBinding('class.icon--stroke')
  @Input()
  classStroke: boolean;

  spriteLink: string;
  iconHref: string;

  constructor() {}

  ngOnInit() {
    let timeStamp = new Date();
    this.spriteLink = `/assets/svg-sprite/icons.svg?v=${timeStamp.getTime()}`;
    this.iconHref = `${this.spriteLink}#${this.icon}`;
    if (this.type === 'fill') {
      this.classFill = true;
      this.classStroke = false;
    } else if (this.type === 'stroke') {
      this.classFill = false;
      this.classStroke = true;
    }
  }
}
