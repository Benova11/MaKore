import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.less']
})
export class ContactItemComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
