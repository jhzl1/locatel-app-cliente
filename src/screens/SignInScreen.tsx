import React from "react";
import { Link } from "@react-navigation/native";
import { Image, Text, useWindowDimensions, View } from "react-native";

import { styles } from "../theme/signInTheme";
import BackgroundGradient from "../components/BackgroundGradient";
import FormLogin from "../components/FormLogin";

const SignInScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <BackgroundGradient from="#67BB37" to="#00953E">
      <View style={[styles.container, { height: height - 100 }]}>
        <Image
          source={require("../assets/locatel_logo.png")}
          style={styles.imgLogo}
        />

        <View style={styles.formContainer}>
          <FormLogin />

          <Link style={styles.link} to={{ screen: "RecoverPassword" }}>
            Olvidé mi contraseña
          </Link>

          <Text>
            ¿No tiene una cuenta?{" "}
            <Link style={styles.link} to={{ screen: "Register" }}>
              Regístrese
            </Link>
          </Text>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default SignInScreen;
