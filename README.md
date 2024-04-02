## Getting started

In the project directory, start off by running:

### `npm install`

Followed by:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Assignment

The assignment is to implement the UX-design found here [Figma](https://www.figma.com/file/oR4fbrAC9Z8WCBINhxYaAZ/CodeTestDesign?type=design&node-id=0%3A1&mode=design&t=48frkwoNhDeFj4rV-1). Don't worry too much about finding the absolute pixel value of margins, paddings or font sizes. Just use your eyes to try to match the design to a good enough level.

The application is built using [Create-React-App](https://create-react-app.dev/) with Typescript.
Relevant files that are prepared to be worked in are:

#### App.tsx

- `App.tsx` file comes prepared with a Modal element `<div className="App-modal"/>` containing two `<div/>` elements.
  - `<div className="App-modal-main"/>` that should contain the title, some informative text and the table.
  - `<div className="App-modal-sidebar"/>` which will display an image, a total and a button.
- The image file is located here: `public/suit.png`
- A utility method `getTotalPrice()` for calculating the total price of all items.

#### data.ts

- The data to be displayed in the table can be found in this file.

#### App.css

- The file containing some initial CSS to style the predefined elements.
- Extend this file with your own styling code as you start creating your own elements.
