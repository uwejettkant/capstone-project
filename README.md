## Easy Import

![](easyimport.gif)

This app is a step by step guide how to import physical products worldwide to Germany by ocean freight. Logistics is a complex topic in which you can get lost easily. The central concept of this app is to show you what to do next and in which phase of the import process you. You get short and pregnant topics that allow you to do your research and take action to the next step.

The app offers useful links to resources, websites, etc. For example, if you want to source a product, but you have no clue where to find the supplier? Well, the app connects you with Asia`s biggest trading platform.

This app was developed as my capstone project during the final three weeks of the neuefische Web Developer Bootcamp in May 2020.

When viewing this app, please switch your browser to iPhone 6/7/8 mode, as it was developed and optimized for mobile.

## Tech stack & dependencies

- Framework: React
- Hosting: Google Firebase
- Backend: Google Firestore
- styled-components
- react-router-dom
- Storybook
- prop-types
- cypress
- jest testing-library

### Setup the project

1. clone repository

`git@github.com:uwejettkant/captone-project.git`

2. Install dependencies

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

3. Run Storybook with

`npm run storybook`

4. Run React Testing Library & Jest with

`npm test`

Launches the test runner in the interactive watch mode.<br />

5. Run Cypress with

`npm run cypress`

6. Install and initialize Firebase CLI. For more information check out the firebase CLI documentation.

`npm install -g firebase-tools`

7. Firestore Backend

You have to setup your own firestore backend.

8. Create a build ready for deploying

`npm run build`

Builds the app for production to the `build` folder.<br />
Delete the actual 'dist' folder and rename the 'build' into dist!
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

8. Deploy the build

`firebase deploy`

Deploys the current 'dist' folder. You can watch the deployment of this repository in the browser (iPhone 6/7/8 mobile layout):

[deployment](https://https://import-ganz-einfach-b9ac3.web.app/)

## This is a react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
