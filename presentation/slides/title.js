import React from "react";
import {
  Heading,
  Slide,
  Text
} from "spectacle";

const Title = () => (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Web Assembly, Blazor, and Magic
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      UDig
    </Text>
  </Slide>
);

export default Title;
