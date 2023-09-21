import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDoc,
  collectionData,
  deleteDoc,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentList: Student[] = [];

  constructor(private firestore: Firestore) {}

  getAllStudents() {
    let collectionInstance = collection(this.firestore, 'students');
    return collectionData(collectionInstance, { idField: 'id' });
  }

  async getStudent(id: string) {
    let docRef = doc(this.firestore, 'students', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  postStudent(student: object) {
    let collectionInstance = collection(this.firestore, 'students');
    return addDoc(collectionInstance, student);
  }

  putStudent(student: object, id:string) {
    let docRef = doc(this.firestore,"students",id);
    return updateDoc(docRef,student);
  }

  deleteStudent(id: string) {
    let docRef = doc(this.firestore,"students",id);
    return deleteDoc(docRef);
  }
}
