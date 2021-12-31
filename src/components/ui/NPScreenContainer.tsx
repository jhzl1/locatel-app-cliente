import React, { FC } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { styles } from "../../theme/signInTheme";
import BackgroundGradient from "../BackgroundGradient";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const NPScreenContainer: FC<Props> = ({ title, children }) => {
  //NoProtectedScreenContainer

  const { height } = useWindowDimensions();

  return (
    <BackgroundGradient from="#67BB37" to="#00953E">
      <View style={[styles.container, { height: height - 100 }]}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>{title}</Text>

          {children}
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default NPScreenContainer;
