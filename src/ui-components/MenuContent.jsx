/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MenuContent(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { store: {}, Home: {}, Title: {}, MenuContent: {} },
      variantValues: { status: "False" },
    },
    {
      overrides: {
        store: {},
        Home: { color: "rgba(15,76,129,1)" },
        Title: {},
        MenuContent: {
          padding: "24px 24px 24px 24px",
          borderRadius: "10px",
          backgroundColor: "rgba(255,255,255,1)",
        },
      },
      variantValues: { status: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      width="364px"
      position="relative"
      padding="24px 0px 24px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MenuContent")}
    >
      <Flex
        gap="8px"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "store")}
        ></View>
        <Text
          fontFamily="Segoe UI"
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="21.09375px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
      </Flex>
    </Flex>
  );
}
