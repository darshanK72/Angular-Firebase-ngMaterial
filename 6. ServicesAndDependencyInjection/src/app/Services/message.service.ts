import { Injectable,EventEmitter } from '@angular/core';
import { Message } from '../Models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:Message[] = [
    new Message("Hello"),
    new Message("Hi There"),
    new Message("This is Sparta")
  ];

  constructor() { }

  messageEvent:EventEmitter<Message> = new EventEmitter<Message>();

  getAllMessages(){
    return this.messages;
  }

  getAllIds(){
    return this.messages.map(m => m.id);
  }

  getMessageById(id:number){
    return this.messages.find(m => m.id == id);
  }

  addMessage(message:Message){
    this.messages.push(message);
  }

  emmitMessageEvent(message:Message){
    this.messageEvent.emit(message);
  }


}
