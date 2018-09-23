// @flow
import React from "react";
import {
  Text
} from "spectacle";

import UdigSlide from "./udig-slide";
import backgroundImage from "../../assets/web_assembly.png";

const WebAssembly = () => (
  <UdigSlide header="Web Assembly" bgImage={backgroundImage}>
    <Text textColor="tertiary">Compile some of your favorite languages you use for native projects for client side web.</Text>
  </UdigSlide>
);

export default WebAssembly;
