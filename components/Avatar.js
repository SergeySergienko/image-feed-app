import React from "react";
import { StyleSheet, Text, View, ColorPropType } from "react-native";
import PropTypes from "prop-types";

export default (Avatar = ({ initials, size, backgroundColor }) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
});

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
});
