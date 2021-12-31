import React from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/aboutTheme";

const AboutScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Locatel App Cliente </Text>
        <Text style={styles.text}>Versión 1.0.0</Text>
        <Text style={styles.text}>
          By Corporación Unidigital. All rights reserved. 2021.
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
