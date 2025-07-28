import React, { createContext, useContext } from "react";
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold} from "@expo-google-fonts/quicksand";
import { ActivityIndicator, View } from "react-native";

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  let [fontsLoaded] = useFonts({
    QuicksandRegular: Quicksand_400Regular,
    QuicksandMedium: Quicksand_500Medium,
    QuicksandSemiBold: Quicksand_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#192f59" />
      </View>
    );
  }

  return (
    <FontContext.Provider value={{ fontRegular: "QuicksandRegular", fontMedium: "QuicksandMedium", fontSemiBold: "QuicksandSemiBold" }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontsLoaded = () => useContext(FontContext);
