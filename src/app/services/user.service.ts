import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserCollection: AngularFirestoreCollection<User>;
  Users: Observable<User[]>;
  UserDoc: AngularFirestoreDocument<User>;

  constructor (public afs: AngularFirestore) {
    this.UserCollection = this.afs.collection<User>('Usuarios');
    this.Users = this.UserCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUsers () {
    return this.Users;
  }
}
