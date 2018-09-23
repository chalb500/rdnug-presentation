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
    <Text italic textColor="tertiary">What needs work</Text>
    <List textColor="tertiary">
      <ListItem>Debugging</ListItem>
      <ListItem>Did not find a comprehensive Blazor tutorial</ListItem>
    </List>
  </UdigSlide>
);

export default DevExpPro;
