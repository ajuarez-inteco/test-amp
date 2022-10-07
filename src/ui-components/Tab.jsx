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
export default function Tab(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "open-in-new": {}, Employees: {}, Tab: {} },
      variantValues: { status: "Active" },
    },
    {
      overrides: {
        "open-in-new": {},
        Employees: { color: "rgba(63,63,63,1)" },
        Tab: {},
      },
      variantValues: { status: "Rest" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(241,143,1,1)"
      padding="8px 24px 8px 24px"
      {...rest}
      {...getOverrideProps(overrides, "Tab")}
    >
      <View
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "open-in-new")}
      ></View>
      <Text
        fontFamily="Segoe UI"
        fontSize="16px"
        fontWeight="400"
        color="rgba(241,143,1,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Employees"
        {...getOverrideProps(overrides, "Employees")}
      ></Text>
    </Flex>
  );
}
