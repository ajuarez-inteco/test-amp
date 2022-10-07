/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="24px"
      height="24px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="90px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(75,179,253,1)"
      {...rest}
      {...getOverrideProps(overrides, "Profile")}
    >
      <Text
        fontFamily="Segoe UI"
        fontSize="12px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        textTransform="uppercase"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="im"
        {...getOverrideProps(overrides, "im")}
      ></Text>
    </Flex>
  );
}
