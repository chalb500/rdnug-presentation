// @flow
import React from "react";

import {
  Text,
  List,
  ListItem,
  CodePane
} from "spectacle";

import UdigSlide from "./udig-slide";

const HelloWorld = () => (
  <UdigSlide header="Hello World">
    <Text italic textColor="tertiary">Easy to spin up Hello World boilerplate</Text>
    <List textColor="tertiary">
      <ListItem>dotnet new -i Microsoft.AspNetCore.Blazor.Templates</ListItem>
      <ListItem>dotnet new blazor -o BlazorApp1</ListItem>
      <ListItem>cd BlazorApp1</ListItem>
      <ListItem>dotnet run/dotnet watch run</ListItem>
    </List>
  </UdigSlide>
);

export default HelloWorld;
