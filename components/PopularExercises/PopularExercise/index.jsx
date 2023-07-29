import { TouchableOpacity, View, Dimensions } from 'react-native'
import { COLORS } from '../../../config/configUtilities'
import AppText from '../../AppText'
import { LinearGradient } from 'expo-linear-gradient'

const PopularExercise = ({ exerciseItem }) => {
    const { width } = Dimensions.get("window");
    const { exerciseIcon, exerciseName, notification, notificationAmount } = exerciseItem;
    return (
        <View className="relative mr-4 items-center gap-y-4">
            {exerciseName.toLowerCase() === "cycling" ? (
                <LinearGradient
                    colors={['#F9CA54', '#FEBE1E']}
                    className="items-center justify-center rounded-full relative"
                    style={{ width: width / 5, height: width / 5 }}
                >
                    {exerciseIcon}
                </LinearGradient>
            ) : (<TouchableOpacity
            activeOpacity={.6}
            className="items-center justify-center rounded-full relative" style={{ backgroundColor: COLORS.homeBackgroundColorSecondary, width: width / 5, height: width / 5 }}>
                {notification && (<View className="absolute right-2 top-1 w-6 h-6 rounded-xl bg-white justify-center items-center">
                    <AppText style={{ color: COLORS.homeBackgroundColorSecondary }}>{notificationAmount}</AppText>
                </View>)}
                {exerciseIcon}
            </TouchableOpacity>)}
            <AppText>{exerciseName}</AppText>
        </View>
    )
}

export default PopularExercise
