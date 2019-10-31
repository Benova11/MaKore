import { Component, OnInit } from '@angular/core';

import { Msg } from '../shared/msg.model';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.less']
})
export class MsgListComponent implements OnInit {
  messages: Msg [];
  options: boolean = false;
  tmpUserprofImg = 'https://cdn.pixabay.com/photo/2019/02/16/16/12/coming-soon-4000552_960_720.png';

  constructor() { }

  ngOnInit() {
    this.messages = [
      {userName : 'admin', msgBody: 'See You', index: null},
      {userName : 'root', msgBody: 'Ok You 2', index: null},
      {userName : 'admin', msgBody: 'See You', index: null},
      {userName : 'root', msgBody: 'Ok You 2', index: null}
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
