import { Component, OnInit, Input } from '@angular/core';

import { Msg } from 'src/app/shared/msg.model';
import { MessagesService } from '../../../shared/messages.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.less']
})
export class ConversationComponent implements OnInit {
  tmpUserprofImg = 'https://cdn.pixabay.com/photo/2019/02/16/16/12/coming-soon-4000552_960_720.png';
  @Input() messages: Msg[];
  constructor(private msgService: MessagesService) {}

  ngOnInit() {
    this.messages = this.msgService.getMessages();
  }

  action(msgItem: HTMLElement) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    msgItem.style.color = '#' + randomColor;
  }

  updateMessages() {
    this.messages = this.msgService.getMessages();
  }
}
