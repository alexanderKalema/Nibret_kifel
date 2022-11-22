import React, { Component , useState} from "react";
import { View, StatusBar, TextInput, Text, Button } from "react-native";
import CustomText from '../global/CustomText';
import {
  useFonts,
} from "@expo-google-fonts/poppins";


export default function FloatingLabelInput({label, ...prop}) {
 
 useFonts({
     PoopinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
   });

  const [isFocused, setIsFocused] = useState(false);

  const labelStyle = {

    position: "absolute",
    left: 0,
    top: !isFocused ? 18 : 0,
    fontSize: !isFocused ? 20 : 14,
    color: (!isFocused) ? "#B8B8B8" : "#555",
  };

 
  return (
    <View style={{ paddingTop: 18 }}>
      {prop.value === "" ? (
        <CustomText
          mylabel={label}
          myfont={"PoppinsThin"}
          mystyle={labelStyle}
        />
      ) : null}

      <TextInput
        //{...prop.onChangeText}
        onChangeText={(text) => prop.onChange(text)}
        style={{
          marginTop: 5,
          height: 26,
          fontSize: 20,
          color: "#000",
          borderBottomWidth: 1,
          borderBottomColor: !isFocused ? "#B8B8B8" : "#555",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
      />
    </View>
  );
}