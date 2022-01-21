import React from "react";
import {
    View,
    Text,
} from 'react-native'

import { FONTS } from "../constants";


const Header = ({ containerStyle, title, titleStyle, leftcomponent, rightcomponent }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}

        >
            {/*Left*/}
            {leftcomponent}
            {/* Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <Text style={{ ...FONTS.h3, ...titleStyle }}>
                    {title}
                </Text>
            </View>


            {/* Right */}
            {rightcomponent}
        </View>
    )
}

export default Header;