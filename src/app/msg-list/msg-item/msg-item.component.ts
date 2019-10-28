import { Component, OnInit, Input } from '@angular/core';

import { Msg } from '../msg.model';

@Component({
  selector: 'app-msg-item',
  templateUrl: './msg-item.component.html',
  styleUrls: ['./msg-item.component.less']
})
export class MsgItemComponent implements OnInit {
  index: number;
  @Input() msg: Msg;
  @Input() onEdit = false;
  constructor() { }

  ngOnInit() {
    this.index = this.msg.index;
  }
}
