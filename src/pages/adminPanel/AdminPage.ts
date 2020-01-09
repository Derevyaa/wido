import BasePage from 'src/pages/BasePage';

class AdminPage extends BasePage {
    get open() {
        return browser.url('admin/user/new');
    }

    get dropdownElement() {
        return $('#dropdown');
    }

    get addNewUser() {
        return $("//a[@href='/admin/user/new']");
    }

    get h1() {
        return $('h1').getText();
    }

    get username() {
        return $('#nickname');
    }

    get email() {
        return $('#email');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#submit');
    }

    get flash() {
        return $('#flash_success').getText();
    }

    clickAddUserButton() {
        this.addNewUser.click;
    }

    createNewUser(username, email, password) {
        this.username.setValue(username);
        this.email.setValue(email);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new AdminPage();
