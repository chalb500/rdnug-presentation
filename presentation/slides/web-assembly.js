// @flow
import React from "react";
import {
  Text,
  List,
  ListItem
} from "spectacle";

import UdigSlide from "./udig-slide";

const WebAssembly = () => (
  <UdigSlide header="Web Assembly">
    <Text textColor="tertiary">Compile some of your favorite languages you use for native projects for client side web.</Text>
    <List textColor="tertiary">
      <ListItem>Initiative to enable server-side code to execute in the browser</ListItem>
      <ListItem>Binaries running the browser</ListItem>
      <ListItem>WebAssembly team pushing C and C++, other teams pushing other languages</ListItem>
    </List>
  </UdigSlide>
);

export default WebAssembly;
