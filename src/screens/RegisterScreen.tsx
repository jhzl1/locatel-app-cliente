import React from "react";
import FormRegister from "../components/FormRegister";
import NPScreenContainer from "../components/ui/NPScreenContainer";

const RegisterScreen = () => {
  return (
    <NPScreenContainer title="Regístrarse">
      <FormRegister />
    </NPScreenContainer>
  );
};

export default RegisterScreen;
