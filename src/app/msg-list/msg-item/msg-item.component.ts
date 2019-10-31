import { Component, OnInit, Input } from '@angular/core';

import { Msg } from '../../shared/msg.model';

@Component({
  selector: 'app-msg-item',
  templateUrl: './msg-item.component.html',
  styleUrls: ['./msg-item.component.less']
})
export class MsgItemComponent implements OnInit {
  index: number;
  @Input() msg: Msg;
  @Input() userImg: string;
  @Input() onEdit: boolean = false;
  constructor() { }

  ngOnInit() {
    this.index = this.msg.index;
  }
}
