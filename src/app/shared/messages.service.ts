import { Msg } from './msg.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MessagesService {

  messages: Msg[] = [
    {userName : 'admin', msgBody: 'See You', index: null},
    {userName : 'root', msgBody: 'Ok You 2', index: null},
    {userName : 'admin', msgBody: 'See You', index: null},
    {userName : 'root', msgBody: 'Ok You 2', index: null}
  ];

  getMessages() {
    return this.messages;
  }

  addMessage(newMsg: Msg) {
    this.messages.push(newMsg);
  }
}
