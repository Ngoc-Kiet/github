import{Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"
import { LoginPage } from "../../../page0bjects/login_page"

When("I Logout" ,()=> {
        LoginPage.navigate();
})
And("I click on Login button" , function(){
        LoginPage.ClickLoginButton()
})