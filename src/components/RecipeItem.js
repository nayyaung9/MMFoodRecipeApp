import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import ThemeText from "./ui/Text";
import { StyleConstants } from "../utils/theme/constants";
import { colors } from "../utils/theme/colors";
import { useNavigation } from '@react-navigation/native';
import { RatingStarIcon } from "./ui/icons/Root";

const RecipeItem = ({
  id,
  name,
  category,
  image,
  rating,
  duration,
  serving
}) => {
  const navigation = useNavigation();

  const onRouteToRecipeDetail = (recipeId) => navigation.navigate("Recipe-Detail-Screen", { recipeId });

  return (
    <View style={styles.recipeItem}>
      <Pressable onPress={() => onRouteToRecipeDetail(id)}>
        <Image source={{ uri: image }} style={styles.recipePhoto} />

        <View style={styles.ratingContainer}>
          <RatingStarIcon />
          <ThemeText color={colors.white}>{rating}</ThemeText>
        </View>
        <View style={styles.durationContainer}>
          <ThemeText color={colors.white} size={12}>{duration}</ThemeText>
        </View>
      </Pressable>

      <View style={styles.recipeItemContainer}>
        <ThemeText
          variant={StyleConstants.Font.Variant.Bold}
          size={16}
        >
          {name}
        </ThemeText>
        <ThemeText color={colors.lightGray} size={12}>{serving}</ThemeText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recipeItem: {
    // paddingHorizontal: StyleConstants.Spacing.Container,
  },
  recipePhoto: {
    width: 280,
    height: 180,
    borderRadius: StyleConstants.Spacing.S,
  },
  recipeItemContainer: {
    paddingVertical: StyleConstants.Spacing.M - 4
  },
  ratingContainer: {
    position: "absolute",
    top: StyleConstants.Spacing.S,
    left: StyleConstants.Spacing.S,
    flexDirection: "row",
    alignItems: "center",
    gap: StyleConstants.Spacing.S - 4,
    backgroundColor: "rgba(48, 48, 48, .4)",
    paddingVertical: StyleConstants.Spacing.S - 2,
    paddingHorizontal: StyleConstants.Spacing.S,
    borderRadius: StyleConstants.Spacing.S,
  },
  durationContainer: {
    position: "absolute",
    bottom: StyleConstants.Spacing.S,
    right: StyleConstants.Spacing.S,
    backgroundColor: "rgba(48, 48, 48, .4)",
    paddingVertical: StyleConstants.Spacing.S - 2,
    paddingHorizontal: StyleConstants.Spacing.S,
    borderRadius: StyleConstants.Spacing.S,
  }
})

export default RecipeItem;