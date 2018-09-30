// @flow
import React from "react";

import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const DevExpCon = () => (
  <UdigSlide header="Developer Experience">
    <Text italic textColor="tertiary">What needs work</Text>
    <List textColor="tertiary">
      <ListItem>Debugging</ListItem>
      <ListItem>Did not find a comprehensive Blazor tutorial</ListItem>
      <ListItem>Oddities: models serialized to JSON are secretly subjected to toLower(), bracket placement</ListItem>
    </List>
  </UdigSlide>
);

export default DevExpCon;
