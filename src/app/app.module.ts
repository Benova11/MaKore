import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgItemComponent } from './msg-list/msg-item/msg-item.component';
import { ToolbarModule } from 'primeng/toolbar';
import {OrderListModule} from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { ContactInfoComponent } from './chat/chat-window/contact-info/contact-info.component';
import { ConversationComponent } from './chat/chat-window/conversation/conversation.component';
import { TypingComponent } from './chat/chat-window/conversation/typing/typing.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MsgListComponent,
    MsgItemComponent,
    HeaderComponent,
    ChatWindowComponent,
    ContactInfoComponent,
    ConversationComponent,
    TypingComponent,
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
