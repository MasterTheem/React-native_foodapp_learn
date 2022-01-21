import React from "react"
import { TouchableOpacity, View, Image, Text } from "react-native"
import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';



const FloatButton = ({ qun }) => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                height: 50,
                width: 50,
                backgroundColor: COLORS.lightOrange2,
                bottom: 230,
                //top: 30,
                right: 10,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Image source={icons.cart}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }} />

            <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.body5,
                        lineHeight: 17.5,
                        fontSize: 10
                    }}
                >
                    {qun}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default FloatButton