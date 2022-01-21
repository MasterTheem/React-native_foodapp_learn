import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { MainLayout, Home } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator()


const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null
            }}
            //onPress
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />

            <Text style={{
                marginLeft: 15,
                color: COLORS.white,
                ...FONTS.h3
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.radius
            }}>
                {/*Close*/}
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.black
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/*Profile*/}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={dummyData.myProfile.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View your profile</Text>
                    </View>


                </TouchableOpacity>
                {/*Drawer Items*/}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => {
                            setSelectedTab(constants.screens.home)
                            navigation.navigate("MainLayout")
                        }}
                    />

                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />

                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        onPress={() => {
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate("MainLayout")
                        }}
                    />

                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={() => {
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate("MainLayout")
                        }}
                    />

                    {/* Line Divider*/}

                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />

                    <CustomDrawerItem
                        label={'Track Your Order'}
                        icon={icons.location}
                    />

                    <CustomDrawerItem
                        label={'Coupons'}
                        icon={icons.coupon}
                    />

                    <CustomDrawerItem
                        label={'Setting'}
                        icon={icons.setting}
                    />

                    <CustomDrawerItem
                        label={'Invite a Friend'}
                        icon={icons.setting}
                    />

                    <CustomDrawerItem
                        label={'Help Center'}
                        icon={icons.location}
                    />

                </View>

                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={'Logout'}
                        icon={icons.logout}
                        onPress={() => navigation.replace("SignIn")}
                    />
                </View>

            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = ({ selectedTab, setSelectedTab, navigation, route }) => {
    const dimensions = useWindowDimensions();

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary,
        }}
        >
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: 'transparent',
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        overlayColor: 'transparent',


                    },
                    drawerType: {
                        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
                    },
                }}

                initialRouteName='MainLayout'
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout
                        navigationDrawer={props}
                        navigationStack={navigation}
                    />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}



function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (CustomDrawer)