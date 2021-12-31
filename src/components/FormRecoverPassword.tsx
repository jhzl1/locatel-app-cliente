import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import CustomButtom from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";

const FormRecoverPassword = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ marginBottom: 10 }}>
      <CustomInput placeholder="Ingrese su email" nameIcon="mail-outline" />

      <CustomButtom
        title="Enviar correo de recuperación"
        onPress={() => navigate("Home" as never)}
      />
    </View>
  );
};

export default FormRecoverPassword;
