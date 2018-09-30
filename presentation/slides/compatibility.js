// @flow
import React from "react";
import {
  Text,
  Image
} from "spectacle";
import compatabilityMatrix from "../../assets/compatibility-matrix.png";

import UdigSlide from "./udig-slide";

const Compatibility = () => (
  <UdigSlide header="Compatibility Matrix">
    <Text textColor="tertiary">https://caniuse.com/#search=webassembly</Text>
    <Image src={compatabilityMatrix} />
    <Text textColor="tertiary">Supports .NET Standard 2.0 or higher</Text>
  </UdigSlide>
);

export default Compatibility;
