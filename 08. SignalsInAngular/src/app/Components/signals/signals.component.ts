import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {

  counter = signal(0);
  messages = signal<string[]>([]);
  doubleCounter = computed(() => {
    return this.counter()*2;
  });
  messagesChanged = effect(() => console.log("Message Array Modifed : " + this.messages()))

  increment(){
    console.log(this.counter());
    console.log(this.doubleCounter());
    this.counter.update((prev) => prev+1);
    this.messages.mutate((prev) => prev.push("Increment : " + this.counter()));
  }

  decrement(){
    console.log(this.counter());
    console.log(this.doubleCounter());
    this.counter.update((prev) => prev-1);
    this.messages.mutate((prev) => prev.pop());
  }
}
