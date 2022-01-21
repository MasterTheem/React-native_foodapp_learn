import React from "react";
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import { icons, COLORS } from '../constants'

const Rating = ({
    rating,
    iconStyle,
    activeColor = COLORS.orange,
    inactiveColor = COLORS.lightOrange3
}) => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 1 ? activeColor : inactiveColor,
                    ...style.rateIcon,
                    ...iconStyle
                }}
            />

            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 2 ? activeColor : inactiveColor,
                    ...style.rateIcon,
                    ...iconStyle
                }}
            />

            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 3 ? activeColor : inactiveColor,
                    ...style.rateIcon,
                    ...iconStyle
                }}
            />

            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 4 ? activeColor : inactiveColor,
                    ...style.rateIcon,
                    ...iconStyle
                }}
            />

            <Image
                source={icons.star}
                style={{
                    tintColor: rating >= 5 ? activeColor : inactiveColor,
                    ...style.rateIcon,
                    ...iconStyle
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    rateIcon: {
        height: 15,
        width: 15
    }
})

export default Rating