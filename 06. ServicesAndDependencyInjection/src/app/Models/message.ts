export class Message{
    static count :number = 0;

    id:number;
    message:string;

    constructor(message:string){
        this.id = Message.count;
        Message.count++;
        this.message = message;
    }
}