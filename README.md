## Brief:

App should allow the user to add and remove names to and from a list and then press a button to randomly pick a name from the list. The same name should not be picked twice in a row. The name picked should be displayed in an easy to readway for the user

it should fit the following criteria:
- must compile without errors
- include some form of state management
- work in IE 11+
- utilise webpack

## TO DO:

- [] allow input of names through `<input>`
- [] add added name to list with `X` button as a option to remove the entry
- [] add button to randomly select name from list then cross out that name (so it can't be selected again)
- [] showcase this in a modal view with usual `X` type button to close view
    - [] closing modal should reset crossed out list items
- [] add reset button for list

## EXTRA TO DO (fun bits):

- [] use a casino slots animation to cycle through names before landing on a result
- [] have a celebratory animation/visual (confetti etc...)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.