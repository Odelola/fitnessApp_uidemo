import { View, Pressable, Dimensions, Image } from "react-native"

import { COLORS, MEASUREMENTS } from '../config/configUtilities'
import { Screen, AppText } from "../components"
import { ArrowLeftIcon, FacebookIcon } from "../components/Icons"
import { StatusBar } from "expo-status-bar"
import { universalScreenStyles } from "../components/Screen"

const Onboarding = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const _goHome = () => {
    navigation.navigate("Home");
  }

  return (
    <Screen style={{ backgroundColor: COLORS.onboardingBackgroundColor }}>
      <StatusBar style="light" translucent={true} />
      <View className="flex-row justify-between">
        <ArrowLeftIcon />
        <Pressable onPress={() => _goHome()}>
          <AppText size={16}>SKIP</AppText>
        </Pressable>
      </View>
      <View className="justify-between" style={{ height: height - (universalScreenStyles.screen.paddingTop * 2) }}>
        <View className="mt-6">
          <AppText style={{ textAlign: "center" }}>FITNESS APP</AppText>
        </View>
        <View style={{ width: width - (MEASUREMENTS.paddingHorizontal * 2), height: height / 1.8, }} >
          <Image className="w-full h-full" source={require("../assets/images/OnboardingImages/fitWoman3.png")} resizeMode="contain" />
        </View>
        <View className="gap-y-4 justify-center">
          <Pressable className="flex-row items-center justify-center gap-x-2" onPress={() => _goHome()}>
            <AppText size={16}>SIGN UP WITH FACEBOOK</AppText>
            <FacebookIcon style={{ fill: "red" }} />
          </Pressable>
          <Pressable className="bg-white rounded-3xl text-center py-6 flex-row justify-center" onPress={() => _goHome()}>
            <AppText size={16} style={{ color: COLORS.onboardingBackgroundColor }}>SIGN UP WITH EMAIL</AppText>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
}

export default Onboarding
