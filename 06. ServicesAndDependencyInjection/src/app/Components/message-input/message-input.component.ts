import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/message';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit{

  message!:string;
  ids!:number[];

  constructor(private messageService:MessageService){}

  ngOnInit(): void {
    console.log(this.messageService.getAllMessages());
    this.ids = this.messageService.getAllIds();
  }

  submitMessage(){
    this.messageService.addMessage(new Message(this.message));
    this.ids = this.messageService.getAllIds();
  }

  getMessageDetails(id:number){
    let m = this.messageService.getMessageById(id) || new Message('');
    this.messageService.emmitMessageEvent(m);
  }
}
