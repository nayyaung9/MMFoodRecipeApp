import React from "react";
import ThemeText from "./ui/Text";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import categories from "../data/categories.json";
import { StyleConstants } from "../utils/theme/constants";
import { colors } from "../utils/theme/colors";

const CategoryFilter = ({ currentCategory, onChangeCategory }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <Pressable
          key={index}
          onPress={() => onChangeCategory(category?.id)}
          style={[
            styles.categoryIndicator,
            {
              backgroundColor:
                currentCategory === category.id
                  ? colors.primaryBrand
                  : "transparent",
            },
          ]}
        >
          <ThemeText
            variant={StyleConstants.Font.Variant.Bold}
            size={12}
            color={
              currentCategory === category.id ? colors.white : colors.lightBrand
            }
          >
            {category?.name}
          </ThemeText>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  categoryIndicator: {
    paddingVertical: StyleConstants.Spacing.S,
    paddingHorizontal: StyleConstants.Spacing.M - 4,
    borderRadius: StyleConstants.Spacing.S + 2,
  },
});
export default CategoryFilter;
