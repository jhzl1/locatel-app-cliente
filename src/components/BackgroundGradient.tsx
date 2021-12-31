import React, { FC } from "react";

import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  children: JSX.Element | JSX.Element[];
  from: string;
  rounded?: boolean;
  to: string;
}

const BackgroundGradient: FC<Props> = ({ from, to, children, rounded }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[from, to]}
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: rounded ? 20 : 0,
        }}
      />
      {children}
    </View>
  );
};

export default BackgroundGradient;
