import { ScrollView, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../config/configUtilities'
import AppText from '../AppText'
import PopularExercise from './PopularExercise'
import { CyclingIcon, GymIcon, RunningIcon, SwimmingIcon } from '../Icons'
import { universalScreenStyles } from '../Screen'

const PopularExercises = () => {
    const popularExercisesData = [
        {
            exerciseIcon: <RunningIcon />,
            exerciseName: "Running",
            notification: true,
            notificationAmount: 2,
        },
        {
            exerciseIcon: <SwimmingIcon />,
            exerciseName: "Swimming",
            notification: false,
            notificationAmount: 0,
        },
        {
            exerciseIcon: <GymIcon />,
            exerciseName: "Gym",
            notification: false,
            notificationAmount: 0,
        },
        {
            exerciseIcon: <CyclingIcon />,
            exerciseName: "Cycling",
            notification: false,
            notificationAmount: 0,
        },
    ]
    return (
        <View>
            <View className="flex-row justify-between py-6" style={[universalScreenStyles.screen]}>
                <AppText size={18}>Popular Exercises</AppText>
                <TouchableOpacity>
                    <AppText style={{ color: COLORS.yellowTextColor }}>All</AppText>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal bounces={false} contentContainerStyle={{paddingLeft: universalScreenStyles.screen.paddingHorizontal}} showsHorizontalScrollIndicator={false}>
                {popularExercisesData.map((item, index) => {
                    return (
                        <PopularExercise exerciseItem={item} key={index} />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default PopularExercises
