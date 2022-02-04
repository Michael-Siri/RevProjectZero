import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    @track page = {
        homePage: true,
        aboutPage: false,
        loginPage:false,
        signupPage:false
    }

    handlemenu(e)
    {
        switch(e.detail){
            case "Home":
                this.page.homePage=true;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                break;
            case "About":
                this.page.homePage=false;
                this.page.aboutPage=true;
                this.page.loginPage=false;
                this.page.signupPage=false;
                break;
            case "Login":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=true;
                this.page.signupPage=false;
                break;
            case "Signup":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=true;
                break;
        }

    }

}
