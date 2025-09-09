import React from "react";
import ThemeText from "./ui/Text";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { StyleConstants } from "../utils/theme/constants";
import { colors } from "../utils/theme/colors";
import { BookmarkIcon } from "./ui/icons/Root";
import { useNavigation } from "@react-navigation/native";

const FilteredRecipe = ({ filteredRecipes }) => {
  const navigation = useNavigation();

  const renderRecipedPhoto = (index) => {
    return index % 2
      ? require("../../assets/images/food1.png")
      : require("../../assets/images/food2.png");
  };

  const onRouteToRecipeDetail = (id) =>
    navigation.navigate("Recipe-Detail-Screen", { recipeId: id });
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
    >
      {filteredRecipes.map((recipe, index) => (
        <Pressable
          onPress={() => onRouteToRecipeDetail(recipe?.id)}
          key={index}
        >
          <Image
            source={renderRecipedPhoto(index)}
            style={styles.recipePhoto}
          />

          <View style={styles.recipeItem}>
            <View
              style={{
                marginTop: StyleConstants.Spacing.Container * 3,
              }}
            >
              <ThemeText
                variant={StyleConstants.Font.Variant.Bold}
                size={16}
                style={{ textAlign: "center" }}
                numberOfLines={1}
              >
                {recipe?.name}
              </ThemeText>
              <View style={styles.recipeInfoRow}>
                <View style={{ gap: StyleConstants.Spacing.S - 4 }}>
                  <ThemeText color={colors.lightGray}>Time</ThemeText>
                  <ThemeText variant={StyleConstants.Font.Variant.Bold}>
                    {recipe?.duration}
                  </ThemeText>
                </View>
                <View>
                  <Pressable
                    children={<BookmarkIcon />}
                    style={styles.bookmarkIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: StyleConstants.Spacing.Container,
    gap: StyleConstants.Spacing.M,
  },
  categoryIndicator: {
    paddingVertical: StyleConstants.Spacing.S,
    paddingHorizontal: StyleConstants.Spacing.M - 4,
    borderRadius: StyleConstants.Spacing.S + 2,
  },
  recipePhoto: {
    width: 150,
    height: 150,
    zIndex: 2,
    alignSelf: "center",
  },
  recipeItem: {
    width: 150,
    backgroundColor: colors.recipeItem,
    paddingVertical: StyleConstants.Spacing.S,
    paddingHorizontal: StyleConstants.Spacing.M - 4,
    borderRadius: StyleConstants.Spacing.M - 4,
    marginTop: -90,
  },
  recipeInfoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: StyleConstants.Spacing.M,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FilteredRecipe;
