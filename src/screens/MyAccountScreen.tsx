import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ItemAccount from "../components/ItemAccount";
import { styles } from "../theme/accountTheme";

const MyAccountScreen = () => {
  return (
    <ScrollView style={styles.globalPadding}>
      <View style={styles.cardContainer}>
        <Image
          source={require("../assets/user.png")}
          style={{ height: 80, width: 80 }}
        />
        <View style={{ width: 200 }}>
          <Text style={styles.nameUser}>Omar Campos</Text>
          <Text style={styles.small}>Usuario desde 01/02/21 </Text>
        </View>
      </View>
      <Text style={styles.title}>Mi cuenta</Text>
      <View style={styles.cardContainer}>
        <View>
          <ItemAccount
            iconName="mail-outline"
            itemName="omarjc-1997@hotmail.com"
          />
          <ItemAccount
            iconName="finger-print-outline"
            itemName="C.I 26396720"
          />
          <ItemAccount
            iconName="phone-portrait-outline"
            itemName="04129009644"
          />
          <ItemAccount iconName="card-outline" itemName="**** **** **** 2556" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccountScreen;
