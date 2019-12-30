import BasePage from 'src/pages/BasePage';


class MainMenu extends BasePage {
  

    get admin() {
        return $("#menu_admin_viewAdminModule");
    }

    get job() {
        return $("#menu_admin_Job");
    }

    get jobCategory() {
    return $("#menu_admin_jobCategory");
}

get jobCategotyTableName() {
    return $("//span[@class='headerCell']");
}

    get current() {
        return $("//*[@class='current']/a[@class='firstLevelMenu']");
    }
    
    get open() {
        return browser.url('/symfony/web/index.php/admin/viewSystemUsers');
    }

    
getAdminMenuName(){
    return this.admin.getText();
}

getJobCategoryName() {
    return this.jobCategotyTableName.getText();
}

NavigateToJobCategory(){
    this.admin.moveTo();
    this.job.moveTo();
    this.jobCategory.moveTo();
    browser.positionClick();
    return this
}

 
}

export default new MainMenu();
