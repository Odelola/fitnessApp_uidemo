import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native'

import { MEASUREMENTS } from '../../config/configUtilities'


const Screen = ({ children, style }) => {
    return (
        <View style={[universalScreenStyles.screen, style]}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default Screen

export const universalScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 20,
        paddingHorizontal: MEASUREMENTS.paddingHorizontal,
    },
})