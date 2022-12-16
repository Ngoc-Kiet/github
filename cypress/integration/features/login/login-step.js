import{Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"
import { LoginPage } from "../../../page0bjects/login_page"

Given ("I am in Login Page" , ()=>{
    LoginPage.navigate()
})
When("I enter data into the following fields",(dataTable)=>{
    dataTable.hashes().forEach(element => {
        if(element.username){
            LoginPage.inputUserName(element.username)
        }
        if(element.password){
            LoginPage.inputPassword(element.password)
        }
    });
})
And("I click on Login button",()=>{
    LoginPage.ClickLoginButton()
})
// Then("the username {string} is shown correctly" , (username) =>{
//     NavigationPage.assertUserName().should("have.text",username)
// })
