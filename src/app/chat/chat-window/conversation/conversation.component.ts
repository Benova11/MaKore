import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Msg } from 'src/app/shared/msg.model';
import { MessagesService } from '../../../shared/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.less']
})
export class ConversationComponent implements OnInit, OnDestroy {
  tmpUserprofImg = 'https://cdn.pixabay.com/photo/2019/02/16/16/12/coming-soon-4000552_960_720.png';
  @Input() messages: Msg[];
  @Input() isSocket: boolean;
  msgServiceSubs: Subscription;

  constructor(private msgService: MessagesService) {}

  ngOnInit() {
    if (!this.isSocket) {
      this.msgService.getMessagesByPolling();
      this.msgServiceSubs =  this.msgService.msgsUpdatedByPolling.subscribe(
        (msgs) => {
          this.messages = msgs;
        });
    } else {
      this.msgService.runSocket();
      this.msgServiceSubs =  this.msgService.msgsUpdatedBySocket.subscribe(
        (msgs) => {
          this.messages = msgs;
        });
    }

  }

  action(msgItem: HTMLElement) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    msgItem.style.color = '#' + randomColor;
  }

  ngOnDestroy() {
    this.msgService.clearPollingInterval();
    this.msgServiceSubs.unsubscribe();
  }
}
