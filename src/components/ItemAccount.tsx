import React, { FC } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../theme/accountTheme";

interface Props {
  iconName: string;
  itemName: string;
}

const ItemAccount: FC<Props> = ({ iconName, itemName }) => {
  return (
    <View style={styles.itemAccount}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={20} color="#374151" />
      </View>
      <Text>{itemName}</Text>
    </View>
  );
};

export default ItemAccount;
