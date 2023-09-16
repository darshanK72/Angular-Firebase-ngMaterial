import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/message';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-message-show',
  templateUrl: './message-show.component.html',
  styleUrls: ['./message-show.component.css']
})
export class MessageShowComponent implements OnInit{
  message!:Message;

  constructor(private messageService:MessageService){}

  ngOnInit():void{
    this.messageService.messageEvent.subscribe(data => {
      this.message = data;
    })
  }
}
