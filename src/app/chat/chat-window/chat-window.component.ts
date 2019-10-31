import { Component, OnInit, Input } from '@angular/core';
import { Msg } from 'src/app/shared/msg.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit {

  @Input() messages: Msg[];
  constructor() { }

  ngOnInit() {
  }

}
