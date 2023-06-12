import BasePage from "./basePage";
import List from "../customUIcontrols/list";

class LandingPage extends BasePage {
    protected _url = '/';

    private static headerPanel = '[id="headerPanel"]';
    private static rightPanel = '[id="rightPanel"]';
    private static leftPanel ='[id="leftPanel"]';
    private static logo ='[class="logo"]';
    private static caption='[class="caption"]';
    private static loginErrorMessage='[#rightPanel > p]'



    private static solutionsList = '[id="headerPanel"] ul';
    private static loginButton = ':nth-child(5) > .button';
    private static usernameInput = 'input[name=username]';
    private static passwordInput = 'input[name=password]';



    public solutionsList: List;


    constructor() {
        super();
        this.solutionsList = new List(LandingPage.solutionsList);
    }

    getHeaderPanel() {
       return cy.get(LandingPage.headerPanel);

    }

    getLoginButton() {                               //added
        return cy.get(LandingPage.loginButton);           //added
        }                                                 //added


    getLeftPanel() {                               //added
    return cy.get(LandingPage.leftPanel);         //added
    }                                             //added

    getLeftPanel2() {                               //added
        return cy.get(LandingPage.leftPanel);         //added
      }                                             //added



    getSolutionsList() {
        return cy.get(LandingPage.solutionsList);
    }

    getAboutUsContentElement() {
        return cy.get(`${LandingPage.rightPanel} p`);
    }

    getAbouUsContent() {
        return this.getAboutUsContentElement().invoke('text');
    }

    getUsernameInput() {
        return cy.get(LandingPage.usernameInput);
          }
    getPasswordInput() {
        return cy.get(LandingPage.passwordInput);
          }


    getLogo() {
            return cy.get(LandingPage.logo);
              }

    getCaption() {
                return cy.get(LandingPage.caption);
                  }

    getLoginButton() {
             return cy.get(LandingPage.loginButton);
                    }

    getLoginErrorMessage() {
                 return cy.get(LandingPage.loginErrorMessage);
                        }

    public selectSolutionsListItem(itemTextOrIndex: string | number) {
        return this.solutionsList.selectListItem(itemTextOrIndex);
    }
}

export default LandingPage;