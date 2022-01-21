import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native'
import { FONTS, SIZES, COLORS, icons } from '../constants';

const Techercard = ({ containerstyle, name, descrip }) => {
    return (
        <View
            style={{
                ...containerstyle,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,

            }}
        >
            <View style = {{marginVertical:SIZES.base}}>
                <Text style={{
                    ...FONTS.h3,
                    fontSize: 17,
                    marginLeft: SIZES.padding
                }}>
                    {name}
                </Text>


                <Text style={{
                    color: COLORS.darkGray2,
                    ...FONTS.body4,
                    marginLeft: SIZES.padding
                }}>
                    {descrip}
                </Text>
            </View>

        </View>
    )
}

export default Techercard