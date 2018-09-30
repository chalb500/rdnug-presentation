// @flow
import React from "react";
import {
  Text
} from "spectacle";
import compatabilityMatrix from "../../assets/compatibility-matrix.png";

import UdigSlide from "./udig-slide";

const Compatibility = () => (
  <UdigSlide header="Compatibility Matrix" >
    <Text textColor="tertiary">
      https://caniuse.com/#search=webassembly
      <br />
      <img width="130%" src={compatabilityMatrix} />
    </Text>
    <Text textColor="tertiary">Supports .NET Standard 2.0 or higher</Text>
  </UdigSlide>
);

export default Compatibility;
