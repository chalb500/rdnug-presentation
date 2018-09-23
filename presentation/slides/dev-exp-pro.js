// @flow
import React from "react";

import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const DevExpPro = () => (
  <UdigSlide header="Developer Experience">
    <Text italic textColor="tertiary">What we liked</Text>
    <List textColor="tertiary">
      <ListItem>Spring-like route autowiring - Razor feature</ListItem>
      <ListItem>Development Live reloading</ListItem>
      <ListItem>Component-based development approach over page-based</ListItem>
    </List>
  </UdigSlide>
);

export default DevExpPro;
