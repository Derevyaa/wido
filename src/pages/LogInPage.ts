import BasePage from 'src/pages/BasePage';
import AllureReporter from '@wdio/allure-reporter';

class LoginPage extends BasePage {

    get username() {
        return $('#txtUsername');
    }

    get password() {
        return $('#txtPassword');
    }

    get submit() {
        return $("//*[@type='submit']");
    }

    get flash() {
        return $("//*[@class='panelTrigger']").getText();
    }

    
    get open() {
        
        AllureReporter.addStep("open url login page URL" );
                return browser.url('/symfony/web/index.php/auth/login');
        
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
       
    }

 
}

export default new LoginPage();
