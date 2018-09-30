// @flow
import React from "react";
import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const UseCases = () => (
  <UdigSlide header="Use Cases">
    <Text textColor="tertiary">Very interesting technology, but not ready for Production</Text>
    <List textColor="tertiary">
      <ListItem>Future - applicable for a .NET heavy shop that wants to build SPAs</ListItem>
      <ListItem>Now - spin up a quick website</ListItem>
    </List>
  </UdigSlide>
);

export default UseCases;
