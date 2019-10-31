import { Component, OnInit, Input } from '@angular/core';
import { Msg } from 'src/app/shared/msg.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.less']
})
export class ConversationComponent implements OnInit {

  @Input() messages: Msg[];
  constructor() { }

  ngOnInit() {
  }

}
