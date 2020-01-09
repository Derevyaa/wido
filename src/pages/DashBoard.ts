import BasePage from 'src/pages/BasePage';

class DashBoard extends BasePage {

    get dashboardName() {
        return $("//*[@class='head']");
    }

    get open() {
        return browser.url('/symfony/web/index.php/dashboard');
    }

getDashboardName() {
    return this.dashboardName.getText();
}

}

export default new DashBoard();
