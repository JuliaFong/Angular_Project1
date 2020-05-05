import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface AuthResponseData {
    kind: string
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private  http: HttpClient){}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyD-4cwnIFJ04ogo9o1gxk5mtr3WczjN4ZY',
          {   
            email: email,
            password: password,
            returnSecureToken: true
          }
        );
    }

}