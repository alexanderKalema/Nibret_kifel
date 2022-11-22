import { View, Text, SafeAreaView, Platform, StatusBar, ImageBackground, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import FloatingLabelInput from "../models/floating";
import CustomText from "../global/CustomText";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
export default function Login() {

  const [emailvalue, setEmailValue] = useState("");

   handleEmailChange = (newText) => { setEmailValue(newText)};

     const [passwordvalue, setPasswordValue] = useState("");

   handlePasswordChange = (newText) => { setPasswordValue(newText)};

  return (
    <ImageBackground
      source={require("../../assets/images/Background.png")}
      style={[Styles.ImageBackground]}
    >
      <View style={{flexDirection: "column",flex:1,}}>
        <SafeAreaView style={Styles.TopView}>
          <Ionicons name="ios-chevron-back-sharp" size={40} color="#F7F7F7" />

          <CustomText
            mylabel={"Welcome \n Back"}
            myfont={"PoppinsMedium"}
            mystyle={{ fontSize: 35 }}
          />
        </SafeAreaView>

        <View style={Styles.BottomView}>
          <FloatingLabelInput
            label="Email"
            value={emailvalue}
            onChange={handleEmailChange}
          />

          <FloatingLabelInput
            label="Password"
            value={passwordvalue}
            onChange={handlePasswordChange}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText
              mylabel={"Sign in"}
              myfont={"PoppinsMedium"}
              mystyle={{ fontSize: 25 }}
            />
            <View style={[Styles.Circular, {justifyContent:"baseline"}]}>
              <FontAwesome name="long-arrow-right" size={30} color="white" />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}


const Styles = StyleSheet.create({
  TopView: {
    paddingTop: 70,
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  BottomView: {
    flex: 2,
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  ImageBackground: {
    flex: 1,
  },
  Circular: {
    padding: 30,
    backgroundColor: "#EF9F64",
    borderRadius: 100,
  },
});
