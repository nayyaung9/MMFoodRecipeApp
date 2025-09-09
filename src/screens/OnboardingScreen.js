import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ThemeText from "../components/ui/Text";
import { colors } from "../utils/theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleConstants } from "../utils/theme/constants";
import { ArrowIcon, RatingStarIcon } from "../components/ui/icons/Root";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

const OnboardingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const onRouteToStartCooking = () => navigation.navigate("Screen-Tabs");

  return (
    <ImageBackground
      source={require("../../assets/images/onboarding.png")}
      imageStyle={styles.root}
      style={{ flex: 1, paddingTop: insets.top }}
    >
      <View style={styles.absoluteBackground} />
      <View
        style={[
          styles.appBar,
          { paddingTop: insets.top + StyleConstants.Spacing.M },
        ]}
      >
        <RatingStarIcon />

        <ThemeText size={16} color={colors.white}>
          <ThemeText
            size={16}
            variant={StyleConstants.Font.Variant.Bold}
            color={colors.white}
          >
            60k+{" "}
          </ThemeText>
          Premium recipes
        </ThemeText>
      </View>
      <View style={[styles.container, { marginBottom: 48 + insets.bottom }]}>
        <ThemeText
          variant={StyleConstants.Font.Variant.Bold}
          color={colors.white}
          size={56}
        >
          Let's
        </ThemeText>
        <ThemeText
          variant={StyleConstants.Font.Variant.Bold}
          color={colors.white}
          size={56}
        >
          Cooking
        </ThemeText>

        <View style={{ marginTop: StyleConstants.Spacing.L }}>
          <ThemeText size={16} color={colors.white}>
            Find best recipes for cooking
          </ThemeText>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onRouteToStartCooking}
          style={styles.startCookingButton}
        >
          <ThemeText
            variant={StyleConstants.Font.Variant.Bold}
            size={16}
            color={colors.white}
          >
            Start cooking
          </ThemeText>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: SCREEN_HEIGHT,
  },
  absoluteBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  appBar: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: StyleConstants.Spacing.S,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  startCookingButton: {
    backgroundColor: colors.primaryBrand,
    height: 54,
    paddingHorizontal: StyleConstants.Spacing.Container + 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: StyleConstants.Spacing.S,
    borderRadius: 10,
    marginTop: StyleConstants.Spacing.Container * 2,
  },
});
export default OnboardingScreen;
