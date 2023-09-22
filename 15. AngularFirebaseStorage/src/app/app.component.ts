import { Component } from '@angular/core';
import { Firestore,addDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularFirebaseStorage';

  file: any = {};
  progress!:number;
  profileUrl!:string;

  constructor(private firestore:Firestore, private storage: Storage) {}
  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    console.log(this.file);

    let collecitonInstance = collection(this.firestore,"images");
    let storageRef = ref(this.storage, this.file.name);
    let uploadRef = uploadBytesResumable(storageRef, this.file);

    uploadRef.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progress = progress;
      },(error) =>{
        console.log(error);
      },() => {
        getDownloadURL(uploadRef.snapshot.ref).then((downloadURL) => {
          this.profileUrl = downloadURL;
          addDoc(collecitonInstance,{fileName:this.file.name,url:downloadURL});
        });
      });
  }
}
