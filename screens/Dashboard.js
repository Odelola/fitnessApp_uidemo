import { Platform, ScrollView, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../config/configUtilities'
import { AppText, AppNav, MyProfile } from "../components"
import { InfoIcon, ProfileImage } from '../components/Icons'
import { universalScreenStyles } from '../components/Screen'
import { StatusBar } from 'expo-status-bar'

const Dashboard = () => {
  const containerShadowStyles = {
    shadowColor: Platform.OS === 'android' ? "" : "#E8E5E2",
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  }
  const CaloriesStats = () => {
    return (
      <View className="justify-between gap-y-4 mt-4 px-6 py-4 mb-8 bg-white rounded-3xl" style={[containerShadowStyles]}>
        <StatusBar style="dark" translucent={true} />
        <View className="flex-row justify-between items-center">
          <AppText size={50} style={{ color: COLORS.orangeTextColor }}>512</AppText>
          <InfoIcon />
        </View>
        <View className="flex-row justify-between items-end">
          <View>
            <AppText style={{ color: COLORS.homeBackgroundColor, }}>Calories</AppText>
            <AppText style={{ color: COLORS.homeBackgroundColor, }}>remaining</AppText>
          </View>
          <TouchableOpacity>
            <AppText size={16} style={{ color: COLORS.orangeTextColor }}>+ Add to Diary</AppText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const DashboardStats = ({ stat }) => {
    const { amount, title } = stat;
    return (
      <View className="basis-1/2 p-6">
        <View className="w-max">
          <AppText size={30} style={{ color: COLORS.homeBackgroundColorSecondaryAlt }}>{title.toLowerCase() === "food" ? "+" : ""}{amount}</AppText>
          <AppText style={{ color: COLORS.grayTextColor }}>{title}</AppText>
        </View>
      </View>
    )
  }

  const dashBoardStats = [
    {
      amount: 567,
      title: "Goal"
    },
    {
      amount: 1_112,
      title: "Food"
    },
    {
      amount: -123,
      title: "Exercise"
    },
    {
      amount: 784,
      title: "Net"
    },
  ]
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={[{ backgroundColor: COLORS.defaultTextColor }]}>
      <View style={[{ backgroundColor: COLORS.defaultTextColor }, universalScreenStyles.screen]}>
        <View className="flex-row justify-between">
          <AppNav defaultTheme={false} />
          <View>
            <ProfileImage />
          </View>
        </View>
        <View className="my-6">
          <AppText style={{ textAlign: "center", color: COLORS.homeBackgroundColor }}>DASHBOARD</AppText>
        </View>
        {CaloriesStats()}
        <View className="flex-row flex-wrap w-full">
          {dashBoardStats.map((item, index) => (
              <DashboardStats stat={item} key={index} />
          ))}
        </View>
      </View>
      <MyProfile />
    </ScrollView>
  )
}

export default Dashboard
