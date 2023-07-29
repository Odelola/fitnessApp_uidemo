import { ScrollView, View } from 'react-native'

import { COLORS } from '../config/configUtilities'
import { AppText, MealAccordionButton, PopularExercises, AppNav } from "../components"
import { ProfileImage } from '../components/Icons'
import { universalScreenStyles } from '../components/Screen'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  const userBreakfastMealData = [
    {
      foodName: "Strawberries - Raw",
      quantity: "1 cup, halves",
      caloriesAdded: 50,
    },
    {
      foodName: "1 Scrambles Egg White",
      quantity: "1 eggs white",
      caloriesAdded: 20,
    },
    {
      foodName: "Honey",
      quantity: "100 gm",
      caloriesAdded: 200,
    },
  ]

  const userLunchMealData = [
    {
      foodName: "100 % Apple Juice",
      quantity: "200 ml",
      caloriesAdded: 120,
    },
  ]
  const containerShadowStyles = {
    shadowColor: "#2E3B59",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ backgroundColor: COLORS.homeBackgroundColor, position: "relative" }}
    >
      <StatusBar style="light" translucent={true} />
      <View style={universalScreenStyles.screen}>
        <View className="flex-row justify-between">
          <AppNav />
          <View>
            <ProfileImage />
          </View>
        </View>
        <View className="my-6">
          <AppText style={{ textAlign: "center" }}>TODAY</AppText>
        </View>
        <AppText>Diary</AppText>
        <View className="mt-8">
          <MealAccordionButton data={userBreakfastMealData} />
          <MealAccordionButton mealTime="lunch" caloryAmount='120' data={userLunchMealData} />
        </View>
      </View>
      <View style={[{ backgroundColor: COLORS.homeBackgroundColorSecondaryAlt }, containerShadowStyles]} className="rounded-t-[36px] pb-12">
        <PopularExercises />
      </View>
    </ScrollView>
  )
}

export default Home
