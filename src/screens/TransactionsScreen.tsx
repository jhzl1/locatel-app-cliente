import React from "react";
import { ScrollView, Text, View } from "react-native";
import ItemTransaction from "../components/ItemTransaction";
import { styles } from "../theme/transcTheme";

const TransactionsScreen = () => {
  const date = new Date();

  return (
    <ScrollView style={styles.globalPadding}>
      <Text style={styles.titlePage}>Balance</Text>

      <View style={styles.balanceContainer}>
        <Text style={styles.totalBalance}> $16.90 </Text>
        <Text> {date.toLocaleDateString()} </Text>
      </View>

      <Text style={styles.subtitle}>Últimas transacciones</Text>

      <ItemTransaction
        title="Vueltos Locatel"
        amount={5.2}
        date="12/12/21"
        income
      />

      <ItemTransaction
        title="Pago Locatel"
        amount={3}
        date="28/11/21"
        income={false}
      />
      <ItemTransaction
        title="Pago Locatel"
        amount={3}
        date="28/11/21"
        income={false}
      />

      <ItemTransaction
        title="Vueltos Locatel"
        amount={7.6}
        date="05/11/21"
        income
      />
    </ScrollView>
  );
};

export default TransactionsScreen;
