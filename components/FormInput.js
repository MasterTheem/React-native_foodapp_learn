import React from "react";
import { View, Text, TextInput } from "react-native";

import { FONTS, SIZES, COLORS } from "../constants"

const FormInput = ({
    containerStyle,
    label,
    value,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength
}) => {
    return (
        <View style={{ ...containerStyle }}>
            {/*Label & Error msg */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    {label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>
                    {errorMsg}</Text>
            </View>
            {/*Text input*/}
            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                />

                {appendComponent}
            </View>

        </View>
    )

}

export default FormInput