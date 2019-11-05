import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';

import { Msg } from '../shared/msg.model';
import { MessagesService } from '../shared/messages.service';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.less']
})
export class MsgListComponent implements OnInit {
  messages: Msg [];
  options: boolean;
  tmpUserprofImg = 'https://cdn.pixabay.com/photo/2019/02/16/16/12/coming-soon-4000552_960_720.png';

  constructor(private msgService: MessagesService) { }

  ngOnInit() {
    this.options = false;
    this.messages = this.msgService.getMessages();
    this.addIndex();
  }

  onSelectionChange(eventData) {
    console.log("onSelectionChange" + eventData.value);
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

  onEraseMsg(eventData: { userName: string; msgBody: string; index: number; }) {
    const newMessages = this.messages.filter((msg) => {
      return msg.index !== eventData.index;
    });
    this.messages = newMessages;
  }
}
