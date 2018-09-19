// @flow
import React from "react";

import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const Razor = () => (
  <UdigSlide header="Razor">
    <Text italic textColor="tertiary">Razor enables web page templating using C# or Visual Basic and HTML</Text>
    <List textColor="tertiary">
      <ListItem>MVVM and two-way data binding</ListItem>
      <ListItem>XSS prevention through HTML encoding</ListItem>
      <ListItem>Concise: @ instead of {"<% %>"}</ListItem>
    </List>
  </UdigSlide>
);

export default Razor;
