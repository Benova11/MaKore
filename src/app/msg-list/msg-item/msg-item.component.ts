import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() onEdit: boolean;

  @Output() msgErased = new EventEmitter<Msg>();
  constructor() {}

  ngOnInit() {
    this.onEdit = false;
    this.index = this.msg.index;
  }

  onErase() {
    this.msgErased.emit(this.msg);
  }
}
