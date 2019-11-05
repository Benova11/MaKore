import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgItemComponent } from './msg-list/msg-item/msg-item.component';
import { ToolbarModule } from 'primeng/toolbar';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HeaderComponent } from './header/header.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { ContactInfoComponent } from './chat/chat-window/contact-info/contact-info.component';
import { ConversationComponent } from './chat/chat-window/conversation/conversation.component';
import { TypingComponent } from './chat/chat-window/conversation/typing/typing.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { EditContactComponent } from './contact/contact-list/edit-contact/edit-contact.component';
import { ContactItemComponent } from './contact/contact-list/contact-item/contact-item.component';
import { FormsModule } from '@angular/forms';

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
    ContactComponent,
    ContactListComponent,
    EditContactComponent,
    ContactItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    OrderListModule,
    CardModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
