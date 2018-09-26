// @flow
import React from "react";
import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const Strapi = () => (
  <UdigSlide header="Strapi">
  <Text italic textColor="tertiary">The Headless CMS</Text>
    <List textColor="tertiary">
      <ListItem>We focused on learning Blazor</ListItem>
      <ListItem>Fast API creation</ListItem>
      <ListItem>No custom code</ListItem>
    </List>
  </UdigSlide>
);

export default Strapi;
