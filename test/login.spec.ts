import {expect} from 'chai';
import {config} from 'src/config';
import LoginPage from 'src/pages/LogInPage';
import DashBoard from 'src/pages/DashBoard';
import MainMenu from  'src/pages/MainMenu';
import JobCategories from  'src/pages/adminPanel/jobPanel/JobCategories';
import AllureReporter from '@wdio/allure-reporter';

describe('Login page', () => {
    
    
    
       it("Check login", () => {
        LoginPage.open;
        AllureReporter.addSeverity("CRITICAL");
        AllureReporter.addDescription(config.username+' is able to login in to the application','text')
        LoginPage.loginWithCredentials(config.username, config.password);
               expect(LoginPage.flash).to.include("Welcome Anton");
    });
 
     it ("'Dashboard' page successfully opened", () => {
        DashBoard.open;
        const dashboardName = DashBoard.getDashboardName()
        expect(dashboardName).to.eq('Dashboard');
    }); 

    it ("'Admin' page successfully opened", () => {
        MainMenu.open;
        const adminPageName = MainMenu.getAdminMenuName()
        expect(adminPageName).to.eq('Admin');
    }); 


    it ("'Job Category'' page successfully opened", () => {
        //  MainMenu.open;
          const jobcategoryPage = MainMenu.NavigateToJobCategory()
          expect(jobcategoryPage.getJobCategoryName()).to.eq('Job Category');
      }); 
    
   
    
});
    

