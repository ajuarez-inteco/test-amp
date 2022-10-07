/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Tab from "./Tab";
import { Flex } from "@aws-amplify/ui-react";
export default function Fulltab(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Fulltab")}
    >
      <Tab
        display="flex"
        gap="8px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="42px"
        position="relative"
        border="1px SOLID rgba(241,143,1,1)"
        padding="8px 24px 8px 24px"
        status="Active"
        {...getOverrideProps(overrides, "Tab13671865")}
      ></Tab>
      <Tab
        display="flex"
        gap="8px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 24px 8px 24px"
        status="Rest"
        {...getOverrideProps(overrides, "Tab13671876")}
      ></Tab>
    </Flex>
  );
}
