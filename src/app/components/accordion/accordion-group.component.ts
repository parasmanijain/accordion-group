import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: 'accordion-group.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionGroupComponent implements OnInit{

  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() title: string;

  @Input() description; string;

  @Input() icon: string;

  @Input() open: any;

  @Input() close: any;
  /**
   * Emitted when user clicks on group titlebar
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (!this.open) {
      this.open = 'open';
    }
    if (!this.close) {
      this.close = 'close';
    }
    if (!this.icon) {
      this.icon = 'icon';
    }
  }
}
