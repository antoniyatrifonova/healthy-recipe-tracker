import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  User,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated = false;

  constructor(private router: Router, private auth: Auth) {}

  register(email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      map((userCredential) => {
        this.isAuthenticated = true;
        return userCredential.user;
      }),
      catchError((error) => {
        console.error('Registration error', error);
        return of(null);
      })
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((userCredential) => {
        this.isAuthenticated = true;
        return userCredential.user;
      }),
      catchError((error) => {
        console.error('Login error', error);
        return of(null);
      })
    );
  }

  googleLogin(): Observable<User | null> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      map((userCredential) => {
        this.isAuthenticated = true;
        return userCredential.user;
      }),
      catchError((error) => {
        console.error('Google login error', error);
        return of(null);
      })
    );
  }

  logout(): void {
    from(signOut(this.auth)).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      },
      error: (error) => console.error('Logout error', error),
    });
  }
}
