import AllureReporter from '@wdio/allure-reporter';
import {expect} from 'chai';
import {config} from 'src/config';
import JobCategories from  'src/pages/adminPanel/jobPanel/JobCategories';
import DashBoard from 'src/pages/DashBoard';
import LoginPage from 'src/pages/LogInPage';
import MainMenu from  'src/pages/MainMenu';

describe('Login page', () => {

       it('Check login', () => {
        LoginPage.open;
        AllureReporter.addSeverity('CRITICAL');
        AllureReporter.addDescription(config.username+' is able to login in to the application','text');
        LoginPage.loginWithCredentials(config.username, config.password);
        expect(LoginPage.flash).to.include('Welcome Anton');
    });

       it ("'Dashboard' page successfully opened", () => {
        DashBoard.open;
        const dashboardName = DashBoard.getDashboardName();
        expect(dashboardName).to.eq('Dashboard');
    });

       it ("'Admin' page successfully opened", () => {
        MainMenu.open;
        const adminPageName = MainMenu.getAdminMenuName();
        expect(adminPageName).to.eq('Admin');
    });

       it ("'Job Category'' page successfully opened", () => {
        //  MainMenu.open;
          const jobcategoryPage = MainMenu.NavigateToJobCategory();
          expect(jobcategoryPage.getJobCategoryName()).to.eq('Job Category');
      });

});
