import { View } from 'react-native'
import { COLORS } from '../../config/configUtilities'
import AppText from '../AppText'
import { WrenchIcon } from '../Icons'
import MealAccordionPanel from './MealAccordionPanel'

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
        foodName: "100 % Apple Juise",
        quantity: "200 ml",
        caloriesAdded: 120,
    },
]

const MealAccordionButton = ({ mealTime = "breakfast", caloryAmount = "270", data }) => {
    return (
        <View className="mb-10">
            <View className="flex-row justify-between rounded-3xl px-4 py-6" style={{ backgroundColor: COLORS.homeBackgroundColorSecondary }}>
                <AppText size={16} style={{ textTransform: "uppercase" }}>{mealTime}</AppText>
                <View className="flex-row gap-x-8">
                    <AppText style={{ color: COLORS.orangeTextColor }}>{caloryAmount} cal</AppText>
                    <WrenchIcon />
                </View>
            </View>
            {data.map((item, index) => {
                return (
                    <MealAccordionPanel data={item} key={index} />
                )
            }
            )}
        </View>
    )
}


export default MealAccordionButton
