
## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)


### 2. repo

If you want to experiment with running this project in Continuous Integration,

After forking this project in `Github`, run these commands:
-----------------------------------------------------------

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-phonecat.git
## cd into the cloned repo
cd cypress-automation
## install the cypress
 npm install --save-dev cypress@9.6.1
 
## start Dev Envireoment
npm run cypress:open:dev

## start Prod Envireoment
npm run cypress:open:prod

## start Test Envireoment
npm run cypress:open:test

## Add MochAwesome reports to Cypress
npm run test

You should see the fashionphile app up and running. We are now ready to run Cypress tests.
--------------------------------------------
