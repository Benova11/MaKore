import { Component, OnInit } from '@angular/core';

import { Msg } from './msg.model';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.less']
})
export class MsgListComponent implements OnInit {
  messages: Msg [];
  options = false;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {userName : 'admin', lastMsg: 'See You', index: null},
      {userName : 'root', lastMsg: 'Ok You 2', index: null},
      {userName : 'admin', lastMsg: 'See You', index: null},
      {userName : 'root', lastMsg: 'Ok You 2', index: null}
    ];
    this.addIndex();
  }

  onSelectionChange(eventData) {
    console.log(eventData.value);
  }

  onClickNew() {
    console.log('clicked!');
  }

  addIndex() {
    for (const index in this.messages) {
      if (this.messages) {
      this.messages[index].index = +index;
      }
    }
  }
}
