import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../utils/theme/colors";
import { StyleConstants } from "../../utils/theme/constants";
import { SearchIcon } from "./icons/Root";

const ThemeInput = ({
  firstIcon
}) => {
  return (
    <View style={styles.root}>
      {firstIcon && (<View style={styles.firstIconContainer}>
        {firstIcon}
      </View>)}
      <TextInput placeholder="Search"
        style={
          [styles.input,
          {
            marginLeft: firstIcon ? 30 : 0,
          }]
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: StyleConstants.Spacing.S + 2,
    height: 44,
    paddingHorizontal: StyleConstants.Spacing.M,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  firstIconContainer: {
    position: "absolute",
    left: StyleConstants.Spacing.M,
    top: 14,
  }
})

export default ThemeInput;