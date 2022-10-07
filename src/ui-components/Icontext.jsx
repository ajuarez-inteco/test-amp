/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Icontext(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Icontext")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "add")}
      ></View>
      <Text
        fontFamily="Segoe UI"
        fontSize="14px"
        fontWeight="400"
        color="rgba(63,63,63,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Signed Employee Handook"
        {...getOverrideProps(overrides, "Signed Employee Handook")}
      ></Text>
    </Flex>
  );
}
