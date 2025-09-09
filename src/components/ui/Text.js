

import React from "react";
import { Text } from "react-native";
import { colors } from "../../utils/theme/colors";
import { StyleConstants } from "../../utils/theme/constants";

const ThemeText = ({
  children,
  variant = StyleConstants.Font.Variant.Regular,
  size,
  color = colors.black,
  style,
  ...rest
}) => {

  return (
    <Text 
      style={[
        {...variant, fontSize: size, color, ...style },
      ]}
      children={children}
      {...rest}
    />
  )
}

export default ThemeText;