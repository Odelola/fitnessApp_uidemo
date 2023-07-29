import { useState } from 'react'

import { TouchableOpacity, View } from 'react-native'
import { MenuTogglerIcon_darkblue, MenuTogglerIcon_white } from '../Icons'
import AppText from '../AppText'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS } from '../../config/configUtilities'

const routes = ["Home", "Dashboard"];
const AppNav = ({ defaultTheme = true }) => {
    const [openNav, setOpenNav] = useState(false);
    const navigation = useNavigation();
    const { name } = useRoute();

    const TouchableOpacity_opacity = {
        activeOpacity: 0.6
    }
    return (
        <View className=" flex-row gap-x-2">
            <TouchableOpacity activeOpacity={TouchableOpacity_opacity.activeOpacity} onPress={() => setOpenNav(prev => !prev)}>
                {defaultTheme ? (<MenuTogglerIcon_white />) : (<MenuTogglerIcon_darkblue />)}
            </TouchableOpacity>
            <View className="flex-row gap-x-2">
                {routes.map((item, index) => (
                    openNav && (<TouchableOpacity activeOpacity={TouchableOpacity_opacity.activeOpacity} onPress={() => { navigation.navigate(item); setOpenNav(prev => prev = false) }} key={index}>
                        <AppText size={9} style={[name === item ? { borderBottomWidth: 2, borderBottomColor: !defaultTheme ? COLORS.homeBackgroundColor : "white" } : { borderBottom: "none" }, {color: !defaultTheme ? COLORS.homeBackgroundColor : "white"}]}>{item}</AppText>
                    </TouchableOpacity>)
                ))}
            </View>
        </View>
    )
}

export default AppNav
