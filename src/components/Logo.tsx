// we want a global logo which we can utilize everywhere
//In the entire application we are going to maintain the logo from a single component
import React from "react";
import { Image, StyleSheet, View } from "react-native";

//within the single file we can give the static logo setup
interface GlobalLogoProps {
  size?: number;
  color?: string;
  variant?: "primary" | "monochrome" | "dark";
}

const Logo = ({ size = 32, color, variant = "primary" }: GlobalLogoProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("@/assets/icons/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
  },
});

export default Logo;
