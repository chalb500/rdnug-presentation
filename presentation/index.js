// Import React
import React from "react";

// Import Colors
import {
  orange,
  white,
  gray
} from "./utils/colors";

// Import Spectacle Core tags
import {
  Deck
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Title from "./slides/title";
import Razor from "./slides/razor";
import WebAssembly from "./slides/web-assembly";
import Blazor from "./slides/blazor";
import Strapi from "./slides/strapi";
import DevExpPro from "./slides/dev-exp-pro";
import DevExCon from "./slides/dev-exp-con";
import Demo from "./slides/demo";
import Questions from "./slides/question-answer";
import Compatibility from "./slides/compatibility";
import UseCases from "./slides/use-cases";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: white,
  secondary: orange,
  tertiary: gray,
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Title />
        <WebAssembly />
        <Compatibility />
        <Razor />
        <Blazor />
        <Strapi />
        <DevExpPro />
        <DevExCon />
        <Demo />
        <UseCases />
        <Questions />
      </Deck>
    );
  }
}
