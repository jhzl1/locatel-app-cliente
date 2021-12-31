import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/signInTheme";
import CustomButtom from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";

const FormLogin = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <CustomInput placeholder="Usuario" nameIcon="person-outline" />
      <CustomInput
        placeholder="Contrasena"
        secureTextEntry
        nameIcon="lock-closed-outline"
      />
      <CustomButtom
        title="Iniciar sesión"
        onPress={() => navigate("Home" as never)}
      />
    </View>
  );
};

export default FormLogin;
