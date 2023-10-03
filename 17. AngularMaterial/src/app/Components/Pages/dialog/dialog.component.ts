import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from './dialog1/dialog1.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  name!:string;
  animal!:string;


  constructor(private matDialog:MatDialog){}

  openSimpleDialog(){
    const dialogRef = this.matDialog.open(Dialog1Component,{
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
