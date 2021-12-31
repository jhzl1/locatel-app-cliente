import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButtom from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";

const FormRegister = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ marginBottom: 10 }}>
      <Text> Ingrese sus datos: </Text>
      <CustomInput placeholder="Nombre completo" nameIcon="person-outline" />
      <CustomInput placeholder="Email" nameIcon="mail-outline" />
      <CustomInput
        placeholder="Tipo de documento"
        nameIcon="finger-print-outline"
      />
      <CustomInput
        placeholder="Numero de documento"
        nameIcon="finger-print-outline"
      />
      <CustomInput
        placeholder="Fecha de nacimiento"
        nameIcon="calendar-outline"
      />
      <CustomInput
        placeholder="Contrasena"
        secureTextEntry
        nameIcon="lock-closed-outline"
      />
      <CustomInput
        placeholder="Repetir contraseña"
        secureTextEntry
        nameIcon="lock-closed-outline"
      />
      <CustomButtom
        title="Registrarse"
        onPress={() => navigate("Home" as never)}
      />
    </View>
  );
};

export default FormRegister;
