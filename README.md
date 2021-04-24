# _Currency Exchanger_

#### _Exchange USD to other currencies, Last updated: 4/23/21_

#### By _Thomas Russell_

## Description

_This app takes an amount of money in US Dollars and returns the value of that money in one of five other currencies. The available currencies for exchange are the Australian Dollar, Brazilian Real, Chinese Renminbi (Yuan), Euro, and Nigerian Naira._

## Setup/Installation Requirements

### Prerequisites
* [Node](https://nodejs.org/en/)
* A text editor like [VS Code](https://code.visualstudio.com/)

### Installation
1. Clone the repository: `$ git clone https://github.com/account/currency-exchanger`
2. Navigate to the `currency-exchanger/` directory on your computer
3. Open with your preferred text editor to view the code base
4. To start a development server and view the project in the browser:
    * Navigate to `currency-exchanger/` in your command line
    * Run the command `npm install` to install dependencies
    * Optionally, run the commmand `npm run build` to make a bundle of the files
    * Finally, run the command `npm run start` to start a development server
5. To run tests, navigate to `currency-exchanger/` in your terminal and run the command `npm run test`

### Creating an API Key
1. Visit the [ExchangeRate-API](https://www.exchangerate-api.com/) site. Input your email address and click the "Get Free Key" button.
2. You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
3. At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
4. Create a .env file in the top level of the project by running the command `touch .env`
5. Store your API key in the .env file using the syntax `API_KEY=your_api_key_goes_here`. The .env file is included in the .gitignore file and as such will be excluded from any pushes to remote repositories in order to keep the API key secure.

## Tests/Specs

View test results in project directory by running `npm run test`.

## Known Bugs

* No known bugs

## Contact

_Please contact through Github_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _VSCode_
* _webpack_
* _eslint_
* _babel transpiler_
* _Jest testing_

### License

MIT License.

Copyright (c) 2021 _Thomas Russell_
