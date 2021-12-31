import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../../theme/homeTheme";

const DebitCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../assets/card-locatel.png")}
        style={{ borderRadius: 10, flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.cardInside}>
          <View style={styles.stateCardContainer}>
            <Text style={styles.black}>
              <Icon name="ellipse" size={10} color="#16a34a" /> Activa
            </Text>
          </View>

          <View style={styles.cardNumbreContainer}>
            <Text style={[styles.bold, styles.cardNumber, styles.black]}>
              **** **** **** 2556
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DebitCard;
