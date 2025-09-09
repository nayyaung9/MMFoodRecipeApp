import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import ThemeText from "../components/ui/Text";
import { StyleConstants } from "../utils/theme/constants";
import { colors } from "../utils/theme/colors";
import recipes from "../data/recipes.json";
import ProfileRecipeItem from "../components/ProfileRecipeItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileStatItem = ({
  name,
  value
}) => {
  return (
    <View style={styles.statItem}>
      <ThemeText size={12} color={colors.lightGray}>{name}</ThemeText>
      <ThemeText size={20} variant={StyleConstants.Font.Variant.Bold}>{value}</ThemeText>
    </View>
  )
}

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={[styles.contentContainer, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <ThemeText size={24} variant={StyleConstants.Font.Variant.Bold}>My Profile</ThemeText>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require("../../assets/images/author.jpeg")} style={styles.profilePhoto} />
        <TouchableOpacity style={styles.editProfileButton}>
          <ThemeText color={colors.primaryBrand} variant={StyleConstants.Font.Variant.Bold}>Edit Profile</ThemeText>
        </TouchableOpacity>
      </View>
      <View style={{ gap: StyleConstants.Spacing.S, paddingHorizontal: StyleConstants.Spacing.Container }}>
        <ThemeText variant={StyleConstants.Font.Variant.Bold} size={20}>Nay Yaung Lin Lakk</ThemeText>

        <ThemeText color={colors.lightGray}>
          The Maker of Pet Sentry | An Instructor at CodeForge Myanmar
        </ThemeText>
      </View>

      <View style={styles.statContainer}>
        <ProfileStatItem name="Recipe" value={3} />
        <ProfileStatItem name="Videos" value={10} />
        <ProfileStatItem name="Following" value={"1.2 K"} />
        <ProfileStatItem name="Followers" value={"2.4 K"} />
      </View>

      <View style={styles.divider} />

      <View style={styles.tabbingHeader}>
        <TouchableOpacity style={styles.tabbingButton}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={12}  color={colors.lightBrand}>Video</ThemeText>
        </TouchableOpacity>
          <TouchableOpacity style={[styles.tabbingButton, { backgroundColor: colors.primaryBrand }]}>
          <ThemeText variant={StyleConstants.Font.Variant.Bold} size={12} color={colors.white}>Recipe</ThemeText>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: StyleConstants.Spacing.Container }}>
        {recipes.map((recipe, index) => <ProfileRecipeItem key={index} {...recipe} />  )}
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
    height: 70,
    justifyContent: "center",
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: StyleConstants.Spacing.Container,
    marginBottom: StyleConstants.Spacing.M,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  editProfileButton: {
    height: 36,
    borderWidth: 1,
    borderColor: colors.primaryBrand,
    paddingHorizontal: StyleConstants.Spacing.M,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: StyleConstants.Spacing.S + 2,
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: StyleConstants.Spacing.Container,
    marginVertical: StyleConstants.Spacing.Container
  },
  statItem: {
    flex: 1,
    gap: 2,
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.borderColor,
  },
  tabbingHeader: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabbingButton: {
    width: 160,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: StyleConstants.Spacing.S + 2,
  }
})

export default ProfileScreen;