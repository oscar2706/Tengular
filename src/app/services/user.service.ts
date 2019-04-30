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
  usersInDataBase: User[];
  UserDoc: AngularFirestoreDocument<User>;
  userType = -1;
  constructor (public afs: AngularFirestore) { }


  logUser (user: User): number {
    this.UserCollection = this.afs.collection<User>('Users', ref => ref.where("name", "==", user.name).where("password", "==", user.password));
    this.Users = this.UserCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.Users.subscribe(usersFromFirebase => {
      this.usersInDataBase = usersFromFirebase;
      console.log(this.usersInDataBase);
    })

    // if (this.usersInDataBase != null) {
    //   console.log(this.usersInDataBase[0]);
    //   return true
    // }
    // else
    //   return false;


    this.usersInDataBase.forEach(element => {
      console.log(element.id);
      if (element.id != '')
        this.userType = element.userType;
      else
        this.userType = -1;
    });
    return this.userType;
  }
}
