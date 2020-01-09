import { NewUserBuilder } from 'src/pages/builders/NewUserBuilder';

export class NewUsers {
    userName: string;
    email: string;
    password: string;
    constructor(newUserBuilder: NewUserBuilder) {
        this.userName = newUserBuilder.user;
        this.email = newUserBuilder.getemail;
        this.password = newUserBuilder.password;
    }
}