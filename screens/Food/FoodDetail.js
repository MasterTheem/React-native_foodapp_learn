import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    BackHandler
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData, constants } from "../../constants"

import {
    Header,
    IconButton,
    CartQuantityButton,
    IconLabel,
    TextButton,
    LineDivider,
    Rating,
    StepperInput,
    TextButton2
} from "../../components"

import { connect } from 'react-redux'

const FoodDetail = ({ navigation, route, addItemToCart, cartItems }) => {

    const [foodItem, setFoodItem] = React.useState("")
    const [selectedSize, setSelectedSize] = React.useState(1)
    const [sizeNumber, setSizeNumber] = React.useState(12)
    const [qty, setQty] = React.useState(1)
    const [sizePrice, setSizePrice] = React.useState(0)
    const [cartqun, setCartqun] = React.useState([])
    //const [id, setid] = React.useState(Math.floor(Math.random() * 100))

    //const numrandom = Math.floor(Math.random() * 100)


    /* React.useEffect(() => {
        let { foodItemr } = route.params
        setFoodItem(foodItemr)
        //setid(numrandom)
    }) */

    React.useEffect(() => {
        if (route.params?.foodItemr) {
            setFoodItem(route.params?.foodItemr)
        }

        setCartqun(cartItems)


        const backHandler = BackHandler.addEventListener
            ('hardwareBackPress', () => { return true })

        return () => backHandler.remove();

    }, [route.params?.foodItemr])


    function renderHeader() {
        return (
            <Header
                title="DETAILS"
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
                        onPress={() => {
                            navigation.goBack()
                            //console.log("Back")
                        }}
                    />
                }
                rightcomponent={
                    <CartQuantityButton
                        quantity={cartqun.length}
                        onPress={() => {
                            navigation.replace("MyCart")
                        }}
                    />
                }
            />
        )
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Food Card */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2
                    }}
                >
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.body4
                                }}
                            >
                                {foodItem?.calories} calories
                            </Text>
                        </View>
                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />

                    </View>
                    <Image
                        source={foodItem?.image}
                        resizeMode='contain'
                        style={{
                            height: 170,
                            width: "100%"
                        }}
                    />

                </View>

                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name & description */}
                    <Text
                        style={{ ...FONTS.h1 }}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        {foodItem?.description}
                    </Text>

                </View>
                {/* Ratings, Duration & Shipping */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Rating */}
                    <IconLabel
                        containerStyle={{
                            backgroundColor: COLORS.primary
                        }}
                        icon={icons.star}
                        label="4.5"
                        labelStyle={{
                            color: COLORS.white
                        }}
                    />

                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            paddingHorizontal: 0
                        }}
                        icon={icons.clock}
                        label="30 Min"
                        labelStyle={{
                            color: COLORS.black
                        }}
                    />

                    <IconLabel
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            paddingHorizontal: 0
                        }}
                        icon={icons.dollar}
                        label="Free Shipping"
                        labelStyle={{
                            color: COLORS.black
                        }}
                    />

                </View>
                {/* Sizes */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>
                        Sizes:
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: SIZES.padding
                        }}
                    >
                        {dummyData.sizes.map((item, index) => {
                            return (
                                <TextButton
                                    key={`Sizes-${index}`}
                                    buttonContainerStyle={{
                                        width: 55,
                                        height: 55,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                        backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                    }}
                                    label={item.label}
                                    labelStyle={{
                                        color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                        ...FONTS.body2
                                    }}
                                    onPress={() => {
                                        setSelectedSize(item.id)
                                        setSizePrice(item.price)
                                        setSizeNumber(item.sizenum)

                                    }}
                                />
                            )
                        })}

                    </View>

                </View>

            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />
                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>By Mr.Theem</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                        1.3 KM away from you</Text>


                </View>

                {/* Rating */}
                <Rating
                    rating={4}
                    iconStyle={{
                        marginLeft: 3,
                    }}
                />

            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >

                {/* Stepper Input */}
                <StepperInput
                    value={qty}
                    onAdd={() => {
                        setQty(qty + 1)
                    }}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}
                />

                {/* Text Button */}
                <TextButton2
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Buy Now"
                    label2={((foodItem.price + sizePrice) * qty).toFixed(2)}
                    onPress={() => {
                        foodItem.qty = qty
                        foodItem.size = sizeNumber
                        foodItem.sizeprice = sizePrice
                        //foodItem.id = id

                        addItemToCart(foodItem)
                        //console.log(foodItem)
                        setCartqun(cartItems)

                        navigation.navigate({
                            name: 'MainLayout',
                            params: { cartnum: 1 },
                            merge: true,
                        });
                    

                        //navigation.goBack()

                    }}
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
            <ScrollView>
                {/* Food Detail */}
                {renderDetails()}
                <LineDivider />
                {/* Restaurant */}
                {renderRestaurant()}

            </ScrollView>

            {/* Footer */}
            <LineDivider />
            {renderFooter()}
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
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);

//export default FoodDetail;