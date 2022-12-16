const LOGIN_PAGE_URL = "/1-0-0/rn"
const TXT_USERNAME_LOCATOR = "[placeholder='Tên đăng nhập']"
const BTN_LOGIN_LOCATOR = "//div[2]/div[3]"
const TXT_PASSWORD_LOCATOR = "[placeholder='Mật khẩu']"
export const LoginPage = {
    navigate(){
        cy.visit(LOGIN_PAGE_URL)
    },
    inputUserName(username)
    {
        cy.get(TXT_USERNAME_LOCATOR).type(username)
    },
    inputPassword(password)
    {
        cy.get(TXT_PASSWORD_LOCATOR).type(password)
    },
    ClickLoginButton(){
        cy.xpath(BTN_LOGIN_LOCATOR).click()
    },

    LoginAppLication(username,password){
        cy.visit(LOGIN_PAGE_URL)
        cy.get(TXT_USERNAME_LOCATOR).type(username)
        cy.get(TXT_PASSWORD_LOCATOR).type(password)
        cy.xpath(BTN_LOGIN_LOCATOR).click()
    }
}