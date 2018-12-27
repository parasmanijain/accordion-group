import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {

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
}
