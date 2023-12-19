import {inject} from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  updateDoc,
  setDoc,
  Firestore,
  Timestamp,
  deleteDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import { v4 as uuidv4 } from 'uuid';

export class CRUDService<T> {

  firestore = inject(Firestore);

  constructor(private collectionPath: string) {
  }

  create(item: T): Promise<void> {
    const docRef = this.getDocRef(uuidv4());
    return setDoc(docRef, {
      ...item,
      created_at: Timestamp.now()
    });
  }

  getAll(): Observable<(T & {id: string})[]> {
    const collectionRef = collection(this.firestore, this.collectionPath);
    return collectionData(collectionRef, {idField: 'id'}) as Observable<(T & {id: string})[]>;
  }

  getById(id: string): Observable<T> {
    const docRef = this.getDocRef(id);
    return docData(docRef, {idField: 'id'}) as Observable<T & {id: string}>;
  }

  update(item: T & {id: string}): Promise<void> {
    const docRef = this.getDocRef(item.id);
    return updateDoc(docRef, {
      ...item,
      updated_at: Timestamp.now()
    });
  }

  delete(id: string) {
    const docRef = this.getDocRef(id);
    return deleteDoc(docRef);
  }

  private getDocRef(id: string) {
    return doc(this.firestore, this.collectionPath, id);
  }

}
