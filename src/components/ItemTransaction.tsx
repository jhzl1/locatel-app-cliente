import React, { FC } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import tailwind from "tailwind-rn";

import { styles } from "../theme/homeTheme";

interface Props {
  income: boolean;
  title: string;
  amount: number;
  date: string;
}

const ItemTransaction: FC<Props> = ({ income, title, amount, date }) => {
  return (
    <View style={styles.itemTranscContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.iconContainer,
            tailwind(`bg-${income ? "green" : "red"}-200`),
          ]}
        >
          <Icon
            name={`trending-${income ? "up" : "down"}-outline`}
            size={20}
            color={income ? "#16a34a" : "#dc2626"}
          />
        </View>
        <View>
          <Text style={styles.titleTransc}>{title} </Text>
          <Text>{date} </Text>
        </View>
      </View>

      <View>
        <Text style={[styles.transcAmount, styles.bold]}>${amount}</Text>
      </View>
    </View>
  );
};

export default ItemTransaction;
