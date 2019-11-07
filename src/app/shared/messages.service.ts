import { Msg } from './msg.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as socketIo from 'socket.io-client';


@Injectable({providedIn: 'root'})
export class MessagesService {
  private messages: Msg[];
  msgsUpdatedByPolling = new BehaviorSubject<Msg[]>(this.messages);
  msgsUpdatedBySocket = new BehaviorSubject<Msg[]>(this.messages);

  socket = socketIo('http://localhost:3000');
  pollingInterval: any;

  constructor(private http: HttpClient) {}

  runSocket() {
    this.socket.on('getMsg', (data) => {
      this.messages = data;
      this.msgsUpdatedBySocket.next([...this.messages]);
  });
  }

  getMessages() {
    this.http.get<{message: string, msgs: Msg[]}>('http://localhost:3000/').
      subscribe((resData) => {
        this.messages = resData.msgs;
        this.msgsUpdatedByPolling.next([...this.messages]);
      });
  }

  getMessagesByPolling() {
      this.pollingInterval = setInterval(() => {
        this.getMessages();
        console.log('called Polling');
      }, 10000);
  }

  clearPollingInterval() {
    clearInterval(this.pollingInterval);
  }

  addMessage(newMsg: Msg) {
    this.messages.push(newMsg);
    this.msgsUpdatedByPolling.next([...this.messages]);
  }

  getLastIndex() {
    return this.messages.length;
  }
}
