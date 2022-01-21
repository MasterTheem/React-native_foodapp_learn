import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import { images, FONTS, SIZES, COLORS } from '../../constants'


const AuthLayoutNokeyAware = ({ title, subtitle, titleContainerStyle, containerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/*App Icon*/}
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.logo_02}
                        resizeMode='contain'
                        style={{
                            height: 100,
                            width: 200
                        }}
                    />
                </View>
                {/*Title & Subtitle*/}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        ...titleContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.h2
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.darkGray,
                            marginTop: SIZES.base,
                            ...FONTS.body3
                        }}
                    >
                        {subtitle}
                    </Text>
                </View>
                {/*Content / Children*/}
                {children}
            </View>
        </View>
    )
}

export default AuthLayoutNokeyAware