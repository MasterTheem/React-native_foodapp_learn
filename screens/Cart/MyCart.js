import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback

} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import {
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput,
    FooterTotal
} from "../../components"

import { connect } from 'react-redux'

import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';


const MyCart = ({ navigation, cartItems, removeItem }) => {


    const [myCartList, setmyCartList] = React.useState([])

    React.useEffect(() => {
        setmyCartList(cartItems)
    }, [])

    const total = myCartList.reduce(function (tot, record) {
        return tot + (record.price + record.sizeprice) * record.qty;
    }, 0);


    function isEnableplaceorder() {
        return (myCartList.length == 0)
    }

    /* function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList[id]
        newMyCartList.qty = newQty
        const cart = myCartList
        cart[id] = newMyCartList
        setmyCartList(cart)
        console.log(cart)
    }
 */
    
    function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList.map(cl => (cl.id === id ? { ...cl, qty: newQty } : cl))
        setmyCartList(newMyCartList)
    }

    /* function removeMyCartHandler(id) {
        let newMyCartList = [...myCartList]
     
        const index = newMyCartList.findIndex(cart => cart.id === id)
     
        newMyCartList.splice(index, 1)
     
        setmyCartList(newMyCartList)
    } */

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...myCartList];
        const prevIndex = myCartList.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setmyCartList(newData);

    };

    function renderHeader() {
        return (
            <Header
                title="My CART"
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
                            removeItem(myCartList)

                        }}
                    />
                }
                rightcomponent={
                    <CartQuantityButton
                        quantity={cartItems.length}
                    />
                }
            />
        )
    }

    function renderCartList() {
        return (
            <SwipeListView
                data={myCartList}
                disableRightSwipe
                keyExtractor={(item) => `${item.id}`}
                renderItem={(data, item, rowMap,) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            console.log(data.index)
                            //console.log((item) => { item.id })
                        }}
                    >
                        <View
                            style={{
                                height: 100,
                                backgroundColor: COLORS.lightGray2,
                                ...styles.cartItemContainer
                            }}
                        >
                            <View
                                style={{
                                    width: 90,
                                    height: 100,
                                    marginLeft: -10
                                }}
                            >
                                {/* food image */}
                                <Image
                                    source={data.item.image}
                                    resizeMode="contain"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        position: 'absolute',
                                        top: 10
                                    }}
                                />
                            </View>
                            {/* food info */}
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <View>
                                    <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>


                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>${((data.item.price + data.item.sizeprice) * data.item.qty).toFixed(2)}     </Text>
                                        <Text>SIZE:{data.item.size}</Text>
                                    </View>
                                </View>


                            </View>

                            {/* Quantity */}
                            <StepperInput
                                containerStyle={{
                                    height: 50,
                                    width: 125,
                                    backgroundColor: COLORS.white
                                }}
                                value={data.item.qty}
                                onAdd={() => {
                                    updateQuantityHandler(data.item.qty + 1, data.item.id)
                                }}

                                onMinus={() => {
                                    if (data.item.qty > 1) {
                                        updateQuantityHandler(data.item.qty - 1, data.item.id)
                                    }
                                }}
                            />


                        </View>
                    </TouchableWithoutFeedback>
                )}

                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.deletee}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => {
                            console.log(data.item.key)
                            deleteRow(rowMap, data.item.key)
                        }}
                    />
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}

            />
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

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}

            <FooterTotal
                subTotal={total}
                shippingFee={0.00}
                total={total}
                disable={isEnableplaceorder() ? true : false}
                onPress={() => {
                    removeItem(myCartList)
                    navigation.navigate("MyCard", { total: total })
                }}

            />



        </View>
    );
}

const styles = StyleSheet.create({

    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    },

    container: {
        backgroundColor: 'white',
        flex: 1,
    },



});

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


export default connect(mapStateToProps, mapDispatchToProps)(MyCart);


//export default MyCart
