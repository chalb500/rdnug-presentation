// @flow
import React from "react";
import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const Blazor = () => (
  <UdigSlide header="Blazor">
    <Text textColor="tertiary">No JavaScript required.  Dotnet all of the things!</Text>
    <List textColor="tertiary">
      <ListItem>Component-based design</ListItem>
      <ListItem>Modern SPA development framework - DI, routing, hot reloading-like during development</ListItem>
      <ListItem>All modern browser and mobile browsers now support Blazor</ListItem>
      <ListItem>.NET Core on the back end; Blazor on the front end</ListItem>
    </List>
  </UdigSlide>
);

export default Blazor;
