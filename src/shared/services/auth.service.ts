import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Observable, from, of } from 'rxjs';
import { User } from '@firebase/auth-types';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // empty for now
  }

  register(email: string, password: string): Observable<User | null> {
    const user = from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      map((userCredential) => userCredential.user),
      catchError((error) => {
        console.error('Registration error', error);
        return of(null);
      })
    );
    if (user){
      this.isAuthenticated = true;
    }
    return user;
  }

  login(email: string, password: string) {
    this.isAuthenticated = true;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
}
