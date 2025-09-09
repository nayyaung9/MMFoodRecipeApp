import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ThemeText from "../components/ui/Text";
import { StyleConstants } from "../utils/theme/constants";
import { colors } from "../utils/theme/colors";
import recipes from "../data/recipes.json";
import categories from "../data/categories.json";
import RecipeItem from "../components/RecipeItem";
import ThemeInput from "../components/ui/Input";
import { SearchIcon } from "../components/ui/icons/Root";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CategoryFilter from "../components/CategoryFilter";
import FilteredRecipe from "../components/FilteredRecipe";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [currentCategory, setCurrentCategory] = useState(categories[0]?.id);

  const onChangeCategory = (catId) => setCurrentCategory(catId);

  const getRecipes = () => {
    if (currentCategory) {
      return recipes.filter((recipe) => recipe.category === currentCategory);
    }
  }

  const filteredRecipes = getRecipes();

  return (
    <ScrollView contentContainerStyle={[styles.contentContainer, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <ThemeText variant={StyleConstants.Font.Variant.Bold} size={24}>
          Myanmar Food Recipe App
        </ThemeText>
        <ThemeText variant={StyleConstants.Font.Variant.Medium} size={14}>
          By CodeForge Myanmar
        </ThemeText>
      </View>

      <View style={styles.searchContainer}>
        <ThemeInput firstIcon={<SearchIcon />} />
      </View>
      <View style={{ marginBottom: StyleConstants.Spacing.Container + 4 }}>
        <View style={styles.recipeRow}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Trending now 🔥</ThemeText>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} color={colors.primaryBrand}>See all</ThemeText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recipeContainer}>
          {recipes.map((recipe, index) => <RecipeItem {...recipe} key={index} />)}
        </ScrollView>
      </View>

      <View style={{ marginBottom: StyleConstants.Spacing.Container + 4 }}>
        <View style={styles.recipeRow}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Popular Category</ThemeText>
        </View>
        <CategoryFilter
          currentCategory={currentCategory}
          onChangeCategory={onChangeCategory}
        />
        <FilteredRecipe
          filteredRecipes={filteredRecipes}
        />
      </View>

      <View>
        <View style={styles.recipeRow}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Recent Recipes</ThemeText>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} color={colors.primaryBrand}>See all</ThemeText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recipeContainer}>
          {recipes.map((recipe, index) => <RecipeItem {...recipe} key={index} />)}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  searchContainer: {
    margin: StyleConstants.Spacing.Container,
  },
  recipeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: StyleConstants.Spacing.Container,
    marginBottom: StyleConstants.Spacing.M,
  },
  recipeContainer: {
    gap: StyleConstants.Spacing.M,
    paddingHorizontal: StyleConstants.Spacing.Container,
  }
})
export default HomeScreen;