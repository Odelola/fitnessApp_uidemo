import { TouchableOpacity, View } from 'react-native'

import { ChevronRightIcon } from '../Icons'
import AppText from '../AppText'
import { COLORS } from '../../config/configUtilities'
import { universalScreenStyles } from '../Screen'
import { useNavigation } from '@react-navigation/native'

const MyProfile = () => {
    const navigation = useNavigation();
    const _goToOnboarding =() =>{
        navigation.navigate("Onboarding");
    }
    const profileData = ["Shop Fitness Gear", "Goals", "Nutrition", "Meals, Recipes & Foods", "Apps & Devices "]
    const ProfiileTab = ({ title }) => (
        <View className="flex-row justify-between mb-4 px-8 items-center">
            <AppText style={{ color: COLORS.homeBackgroundColor }}>{title}</AppText>
            <ChevronRightIcon />
        </View>
    )
    return (
        <View style={[universalScreenStyles.screen, { backgroundColor: COLORS.grayBackground }]} className="rounded-t-[36px] py-6 mt-10">
            <AppText size={16} style={{textAlign: "center", color: COLORS.grayTextColorAlt, marginBottom: 24, }}>MY PROFILE</AppText>
            {profileData.map((item, index) => <ProfiileTab title={item} key={index} />)}
            <TouchableOpacity className="bg-white rounded-3xl text-center py-8 flex-row justify-center mt-8" style={{ backgroundColor: COLORS.homeBackgroundColorSecondaryAlt}} onPress={() => _goToOnboarding()}>
            <AppText size={16}>LOG OUT</AppText>
          </TouchableOpacity>
        </View>
    )
}

export default MyProfile
