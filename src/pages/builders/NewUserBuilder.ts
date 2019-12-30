import { NewUsers } from 'src/pages/builders/NewUser';

export class NewUserBuilder {

    private _userName: string ;
    private _email: string ;
    private _password: string ;
    

    constructor(userName: string, email: string, password: string) {
        this._userName = userName;
        this._email = email;
        this._password = password;
    }


    setUserName(userName: string) {
        this._userName = userName;
        return this;
    }

    setEmail(email: string) {
        this._email = email;
        return this;
    }

    setPassword(password: string) {
        this._password = password;
        return this;
    }

    build() {
        return new NewUsers(this);
    }

   

    get user() {
        return this._userName;
    }

    get getemail() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}