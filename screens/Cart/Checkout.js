import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { sub } from 'react-native-reanimated';

import {
    Header,
    IconButton,
    FormInput,
    CardItem,
    FooterTotal
} from "../../components"

import { connect } from 'react-redux';

import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants"
import cartItems from '../../stores/cartItem';

const Checkout = ({ navigation, route, removeItem, cartItems }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [subtotal, setSubtotal] = React.useState(0)

    React.useEffect(() => {
        let { selectedCard } = route.params
        let { subtotal } = route.params
        setSelectedCard(selectedCard)
        setSubtotal(subtotal)

    }, [])

    function renderHeader() {
        return (
            <Header
                title="Check Out"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}

                leftcomponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,

                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightcomponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    function renderMyCard() {
        return (
            <View>
                {selectedCard && dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`Mycard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    function renderDeliveryAddr() {
        return (
            <View
                style={{
                    paddingTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2
                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: "85%",
                            ...FONTS.body3
                        }}
                    >
                        38/122 m.14 road phujao banghuasua prapradeang samutprakan 10130
                    </Text>
                </View>
            </View>
        )
    }

    function renderCoupon() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>

                <FormInput
                    inputStyle={{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden'
                    }}
                    placeholder="Coupon Code"
                    appendComponent={
                        <View
                            style={{
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                        </View>
                    }
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
            >

                {/* My Cards */}
                {renderMyCard()}

                {/* Delivery Address*/}
                {renderDeliveryAddr()}

                {/* Coupon */}
                {renderCoupon()}

            </KeyboardAwareScrollView>

            <FooterTotal
                subTotal={subtotal}
                shippingFee={0.00}
                total={subtotal}
                onPress={() => {
                    removeItem([])
                    console.log(cartItems)
                    
                    //navigation.replace("Success")
                }}
            />
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
//export default Checkout;