import React from "react";
import {
  Heading,
  Slide,
  Text
} from "spectacle";
import backgroundImage from '../../assets/title_background.png';

const styles = {
  adjustMainContent: {
    paddingLeft: '400px',
  }
}

const Title = () => (
  <Slide transition={["fade"]} bgImage={backgroundImage}>
    <div style={styles.adjustMainContent}>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Web Assembly, Blazor, and Magic
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
        UDig's Joe Fehrman and Cody Halbleib
      </Text>
    </div>
  </Slide>
);

export default Title;
