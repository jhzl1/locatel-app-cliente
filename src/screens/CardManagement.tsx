import React from "react";
import { Text, View } from "react-native";
import CustomButtom from "../components/ui/CustomButton";
import { styles } from "../theme/cardManagementTheme";

const CardManagement = () => {
  return (
    <View style={styles.globalPadding}>
      <CustomButtom title="Activar" width="full" />
      <CustomButtom title="Desactivar" width="full" />
      <CustomButtom title="Bloquear" width="full" />
      <CustomButtom title="Cambio de clave" width="full" />
    </View>
  );
};

export default CardManagement;
