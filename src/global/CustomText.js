import { StyleSheet, View, Text } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";


import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function CustomText({myfont,mylabel, mystyle}) {
   let [fontsLoaded] = useFonts({
   PoppinsThin: Poppins_100Thin,
   PoppinsLight: Poppins_300Light,
     PoppinsExtraLight:Poppins_200ExtraLight,

     PoppinsRegular: Poppins_400Regular,
     PoppinsMedium: Poppins_500Medium,
     PoppinsSemiBold: Poppins_600SemiBold,
     PoppinsBold: Poppins_700Bold,
     
   });

   const GlobalStyle = StyleSheet.create({
     CustomFont: { fontFamily: myfont },
   });
   if (!fontsLoaded) {
     return <AppLoading />;
   }
else{
  return (
    
      <Text style={[ GlobalStyle.CustomFont , mystyle]}   >{mylabel}</Text>

  );
}
}