import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import ItemTransaction from "../components/ItemTransaction";
import CustomButtom from "../components/ui/CustomButton";
import DebitCard from "../components/ui/DebitCard";
import { styles } from "../theme/homeTheme";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView>
      <View style={styles.screenPadding}>
        <View style={styles.userDataContainer}>
          <Text style={{ fontWeight: "bold" }}>Bienvenido </Text>
          <Text style={styles.nameUser}>Omar Campos</Text>
        </View>

        <DebitCard />

        <View style={styles.balanceContainer}>
          <Text style={[styles.title, styles.text]}>Saldo disponible </Text>
          <Text style={[styles.cardBalance, styles.text]}>$15</Text>
        </View>

        <Text style={styles.title}>Transacciones</Text>
        <View>
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

          <CustomButtom
            title="Ver más"
            width="full"
            onPress={() => navigate("Transactions" as never)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
