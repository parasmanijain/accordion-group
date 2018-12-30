import { Component, ContentChildren, QueryList, AfterContentInit, Input, OnInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent  implements OnInit, AfterContentInit {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  @Input() title: any;

  @Input() icon: any;

  @Input() openFirst: boolean;

  @Input() toggle: boolean;

  ngOnInit() {
  }
  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    // Set active to first element
    if (this.openFirst) {
      this.groups.toArray()[0].opened = true;
    }
    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open the group
        this.openGroup(t);
      });
    });
  }

  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openGroup(group) {
    if (this.toggle) {
      // close other groups
      this.groups.toArray().forEach((t) => {
        if (t !== group) {
        t.opened = false;
        }
      });
    }
    // open current group
    group.opened = !group.opened;
  }
}
