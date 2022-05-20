<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Kudzai Mabika | Scandiweb Junior React Test</h3>
</div>
<br />

## Scandiweb x Kudzai Store

<br/>

<img src="./public/images/demo.gif">

A webapp using React.js written as part of the Scandiweb Junior Developer test assignment.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [react.js](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [styled-components](https://styled-components.com/docs)
- [graphql](https://graphql.org/)
- [opus](https://github.com/tilework/opus)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

Install the server and run the server.

- npm
  ```sh
  git clone https://github.com/scandiweb/junior-react-endpoint
  ```
- yarn
  ```sh
  yarn install
  ```
- start server
  ```sh
  yarn start
  ```

### Scandiweb Client

Ensure the server is running and start the client.

1. clone the repo
   ```sh
   git clone https://github.com/kmabika/minimal-store-scandiweb
   ```
2. install packages
   ```sh
   yarn install
   ```
3. start client
   ```sh
   yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Reflection

This was a 1-month long project. Project goals included building a web app that followed the following specs:

- Ability to add/remove products and change their amounts in cart - on the cart page itself, PLP and PDP should be provided.
- For products that have various options (attributes) - the options should be selected.
- The selected options of added to cart products should be visible in cart overlay and in cart page.
- If an attribute is a swatch attribute (type = swatch), a representation of the value should be rendered on PDP and PLP, rather than text description (e.g. the color itself, not "Blue" or "0000FF")
- Filtering products by category name for all of the categories from BE
- The descriptions provided in HTML format should be parsed and presented as HTML, not as plain text
- Ability to change the currency of the store to one of the available currencies.

Whilst making sure the webapp closely resembels the following [designs](<https://www.figma.com/file/38MTfcwlMMF3hI1TB8l5yp/Junior-Frontend-Test-Designs-(Public)-(Copy)?node-id=0%3A1>)

Originally I wanted to build the web application with Apollo and depend on Apollo as a state management solution instead of redux since I'm familiar with Apollo. After some research, I found out that redux offers a more predictable state container, and looking at the ScandiPwa codebase I saw a benefit in using redux. I decided on using react, redux, and opus as my stack.

I achieved all my goals and met the project specifications. This was a really interesting assignment, and I enjoyed working on the project.

<p align="right">(<a href="#top">back to top</a>)</p>
