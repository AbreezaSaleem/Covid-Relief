<a  href="https://www.twilio.com">
<img  src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg"  alt="Twilio"  width="250"  />
</a>
 
# Covid Relief Pakistan

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## About

This is the source code for Covid Relief Pakistan project. It consists of a node backend which serves a React SPA. The application consumes Twilio SMS API to send details about a charity to users. 

The app has a single user screen that gives user an option to select a city from the dropdown. Upon selecting, the app shows a list of charities operating in that city. To get more details about a charity through Twilio SMS API, click on the charity and provide your number.

Users can also help us by filling out the Google Form that can be reached by clicking the `Add Charity` button on the homepage. The data we get is vetted manually and then added as md files to the project.


## Features

- Node.js web server using [Express.js](https://npm.im/express)
- React for User interface [React](https://reactjs.org/)
- The application is deployed on heroku [Heroku](https://heroku.com)
- Linting and formatting using [ESLint](https://npm.im/eslint) and [Prettier](https://npm.im/prettier)
- Project specific environment variables using `.env` files and [`dotenv-safe`](https://npm.im/dotenv-safe) by comparing `.env.example` and `.env`.
- One click deploy buttons for Heroku


## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings

This application is ready for consumption, we only need to collect
all the config values we need to run the application:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone git@github.com:Abreeza-Saleem/Covid-Relief.git
cd Covid-Relief
```

2. Install dependencies

```bash
npm install
```

3. Set your environment variables

Place your env variables inside the .env file. The three environmental variables required are:
- TWILIO_ACCOUNT_SID=xxxx
- TWILIO_PHONE_NUMBER=xxxxxx
- TWILIO_AUTH_TOKEN=xxxxxx

See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

1. Run the application

In the project directory, first run:

### `yarn build`

This builds the app for production to the `build` folder.<br />

Then run: 
### `yarn start`

Runs the node app in the development mode.It serves the react app from the build folder.<br />
Open [http://localhost:8000] to run it in the browser.

That's it!

### Cloud deployment

Additionally to trying out this application locally, you can deploy it to a variety of host services. Here is a small selection of them.

Please be aware that some of these might charge you for the usage or might make the source code for this application visible to the public. When in doubt research the respective hosting service first.

| Service                           |                                                                                                                                                                                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Heroku](https://www.heroku.com/) | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)                                                                                                                                       |
| [Glitch](https://glitch.com)      | [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/twilio-labs/sample-template-nodejs.git) |
| [Zeit](https://zeit.co/)          | [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/twilio-labs/sample-template-nodejs/tree/master)                                                                 |

## Resources

- [GitHub's repository template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) functionality

## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

[Visit the project on GitHub](https://github.com/AbreezaSaleem/Covid-Relief)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com
