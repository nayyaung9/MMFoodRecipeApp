import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import ThemeText from "../components/ui/Text";
import recipes from "../data/recipes.json";
import categories from "../data/categories.json";
import { colors } from "../utils/theme/colors";
import { StyleConstants } from "../utils/theme/constants";
import { BackIcon } from "../components/ui/icons/Root";

const RecipeDetailScreen = ({
  navigation,
  route: { params }
}) => {
  const [recipe, setRecipe] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (params?.recipeId) {
      const findRecipe = recipes.find((recipe) => recipe.id === params?.recipeId);

      if (findRecipe) {
        setRecipe(findRecipe)

        const findCategory = categories.find((category) => category.id === findRecipe?.category);
        if(findCategory) {
          setCategory(findCategory?.name)
        }
      }
    }
  }, [params?.recipeId]);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable
          hitSlop={20}
          onPress={() => navigation.goBack()}
          children={<BackIcon />}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <ThemeText size={24} variant={StyleConstants.Font.Variant.Bold}>{recipe?.name}</ThemeText>
        <View style={styles.recipePhotoContainer}>
          <Image source={{ uri: recipe?.image }} style={styles.recipePhoto} />
          {category && (
            <View style={styles.recipeCategory}>
              <ThemeText>{category}</ThemeText>
            </View>
          )}
        </View>
        <View style={styles.informationContainer}>
          <View>
            <ThemeText variant={StyleConstants.Font.Variant.Bold} size={16}>{recipe?.rating}</ThemeText>
            <ThemeText color={colors.lightGray}>Rating</ThemeText>
          </View>
          <View>
            <ThemeText variant={StyleConstants.Font.Variant.Bold} size={16}>{recipe?.duration}</ThemeText>
            <ThemeText color={colors.lightGray}>Duration</ThemeText>
          </View>
          <View>
            <ThemeText variant={StyleConstants.Font.Variant.Bold} size={16}>{recipe?.serving}</ThemeText>
            <ThemeText color={colors.lightGray}>Serving</ThemeText>
          </View>
        </View>

        <View style={styles.stepContainer}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Steps</ThemeText>
          <View style={{ marginTop: StyleConstants.Spacing.S }}>
            {recipe?.steps.map((step, index) => (
              <ThemeText key={index}>{index + 1}. {step}</ThemeText>
            ))}
          </View>
        </View>

        <View style={styles.stepContainer}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Ingredients</ThemeText>
          <View style={{ marginTop: StyleConstants.Spacing.S }}>
            {recipe?.ingredients.map((step, index) => (
              <View key={index} style={styles.ingredientItem}>
                <ThemeText variant={StyleConstants.Font.Variant.Medium}>{step}</ThemeText>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  recipePhotoContainer: {
    marginTop: StyleConstants.Spacing.M - 4,
    marginBottom: StyleConstants.Spacing.M
  },
  recipePhoto: {
    width: "100%",
    height: 250,
    borderRadius: StyleConstants.Spacing.S
  },
  recipeCategory: {
    position: "absolute",
    backgroundColor: colors.lightBrand,
    bottom: StyleConstants.Spacing.S,
    right: StyleConstants.Spacing.S,
    borderRadius: StyleConstants.Spacing.S,
    paddingHorizontal: StyleConstants.Spacing.S,
    paddingVertical: StyleConstants.Spacing.S - 4,
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepContainer: {
    marginTop: StyleConstants.Spacing.M - 4,
  },
  ingredientItem: {
    paddingVertical: StyleConstants.Spacing.M - 4,
    paddingHorizontal: StyleConstants.Spacing.M,
    borderRadius: StyleConstants.Spacing.M - 4,
    backgroundColor: colors.cardBackground,
    marginBottom: StyleConstants.Spacing.M - 4,
  }
})
export default RecipeDetailScreen;