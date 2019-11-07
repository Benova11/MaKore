import { Component, OnInit } from '@angular/core';

import { MessagesService } from 'src/app/shared/messages.service';
import { Msg } from 'src/app/shared/msg.model';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.less']
})
export class TypingComponent implements OnInit {

  constructor(private msgService: MessagesService) { }

  ngOnInit() {
  }

  onSubmitMsg(msgContent: string) {
    const currentMsgArrIndex = this.msgService.getLastIndex();
    const msgToAdd: Msg = {
      userName: 'none',
      msgBody: msgContent,
      index: currentMsgArrIndex
    };
    this.msgService.addMessage(msgToAdd);
  }
}
