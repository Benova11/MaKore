import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Msg } from 'src/app/shared/msg.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ChatWindowComponent implements OnInit {

  @Input() socket: boolean;
  @Input() messages: Msg[];
  constructor() {}

  ngOnInit() {
  }

}
