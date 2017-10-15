import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../chat-models';

@Injectable()
export class UserService {
  private _currentUser: Subject<User> = new BehaviorSubject<User>(null);


  public setCurrentUser(newUser: User): void {
    this._currentUser.next(newUser);
  }
}

export var userServiceInjectables: Array<any> = [
  UserService
];
