import { View } from 'react-native'
import { COLORS } from '../../../config/configUtilities'
import AppText from '../../AppText'

const MealAccordionPanel = ({ data }) => {
    const { foodName, quantity, caloriesAdded } = data;
    return (
        <View className="flex-row justify-between mt-8">
            <View >
                <View className="flex-row gap-x-2 items-center mb-1">
                    <View className="w-2 h-2 rounded-xl" style={{ backgroundColor: COLORS.yellowTextColor }}></View>
                    <AppText size={16}>{foodName}</AppText>
                </View>
                <View>
                    <AppText style={{ color: COLORS.homeTextColor }}>{quantity}</AppText>
                </View>
            </View>
            <View>
                <AppText size={18}>{caloriesAdded}</AppText>
            </View>
        </View>
    )
}

export default MealAccordionPanel
