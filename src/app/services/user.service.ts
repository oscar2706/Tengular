import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserInterface } from '../models/UserInterface';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserCollection: AngularFirestoreCollection<UserInterface>;
  Users: Observable<UserInterface[]>;
  UserDoc: AngularFirestoreDocument<UserInterface>;

  constructor(public afs:AngularFirestore) { 
    this.UserCollection = this.afs.collection<UserInterface>('Usuarios');
    this.Users = this.UserCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UserInterface;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  getUsers()
  {
    return this.Users;
  }
}
