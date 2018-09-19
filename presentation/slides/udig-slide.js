// @flow
import * as React from "react";
import {
  Heading,
  Slide
} from "spectacle";

type ComponentProps = {
  header: string,
  children?: any
};

const UdigSlide = ({ header, children }: ComponentProps) => (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      {header}
    </Heading>
    {children}
  </Slide>
);

export default UdigSlide;
