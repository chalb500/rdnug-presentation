// @flow
import React from "react";
import {
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const Strapi = () => (
  <UdigSlide header="Strapi the Headless CMS">
    <List textColor="tertiary">
      <ListItem>We focused on learning Blazor</ListItem>
      <ListItem>Fast API creation</ListItem>
      <ListItem>No custom code</ListItem>
    </List>
  </UdigSlide>
);

export default Strapi;
