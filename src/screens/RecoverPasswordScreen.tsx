import React from "react";
import FormRecoverPassword from "../components/FormRecoverPassword";
import NPScreenContainer from "../components/ui/NPScreenContainer";

const RecoverPasswordScreen = () => {
  return (
    <NPScreenContainer title="Recuperar contraseña">
      <FormRecoverPassword />
    </NPScreenContainer>
  );
};

export default RecoverPasswordScreen;
