import { Text} from 'react-native'
import { COLORS } from '../../config/configUtilities'

const AppText = ({ size = 14, fontFamily = "MonumentExtendedRegular", children, style }) => {
    return (
        <Text 
        style={[{
            color: COLORS.defaultTextColor,
            fontSize: size,
            fontFamily: fontFamily,
        }, style]}
        >{children}</Text>
    )
}

export default AppText
