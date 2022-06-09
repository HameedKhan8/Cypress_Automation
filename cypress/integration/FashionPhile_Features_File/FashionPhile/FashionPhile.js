import { When, Then, And, Before, After, Given, } from "cypress-cucumber-preprocessor/steps";
import ShopNow from '../../../support/PageObjects/FashionPhilePage';
const ObjShopNow = new ShopNow();


When('User Go to FashionPhile website', () => {
 cy.visit('/')

})
And('Search for Chanel Black hand bag', () => {
  ObjShopNow.SearchforChanelBlackhandbag();

})
And('Select third item from search', () => {
  ObjShopNow.Selectthirditemfromsearch();

})
Then('User Add Item to Bag', () => {
  ObjShopNow.UserAddItemtoBag();

})
And('User Goto Checkout', () => {
  ObjShopNow.UserGotoCheckout();

})
And('User Enter Email', () => {
  ObjShopNow.UserEnterEmail();

})
And('User Enter Name And Address', () => {
  ObjShopNow.UserEnterNameAndAddress();
})
Then('User Click On Continue Button', () => {
  ObjShopNow.UserClickOnContinueButton();

})
And('User Select Complimentary Ground And Continue', () => {
  ObjShopNow.UserSelectComplimentaryGround()
})