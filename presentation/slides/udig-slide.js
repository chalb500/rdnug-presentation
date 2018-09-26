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

const UdigSlide = ({ header, children, ...other }: ComponentProps) => (
  <Slide transition={["fade"]} bgColor="primary" {...other}>
    <Heading size={6} caps lineHeight={1} textColor="secondary">
      {header}
    </Heading>
    {children}
  </Slide>
);

export default UdigSlide;
