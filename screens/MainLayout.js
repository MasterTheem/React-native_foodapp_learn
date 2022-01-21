import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Touchable,




} from 'react-native';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Value
} from 'react-native-reanimated';

// import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import {
    Home,
    Search,
    CartTab,
    Favourite,
    Notification
} from '../screens'

import { Header, CartQuantityButton, FloatButton } from '../components'

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from '../constants';

const TabButton = ({ label, icons, isFocused, onPress,
    innerContainerStyle, outerContainerStyle }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    outerContainerStyle
                ]}
            >
                <Animated.View
                    style={[
                        {
                            flexDirection: 'row',
                            width: "80%",
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        source={icons}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.white : COLORS.gray
                        }}
                    />
                    {isFocused &&
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            {label}
                        </Text>

                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({ drawerAnimationStyle, navigationDrawer, selectedTab, setSelectedTab, navigationStack, cartnum }) => {

    const flatListRef = React.useRef()

    //Reanimated Shared Value

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)
    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)
    const favouriteTabFlex = useSharedValue(1)
    const favouriteTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)

    //Reanimated Animated Style

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    })

    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    })

    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })

    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value
        }
    })

    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favouriteTabColor.value
        }
    })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })

    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })

    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    React.useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })
            homeTabFlex.value = withTiming(4, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false
            })
            searchTabFlex.value = withTiming(4, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            searchTabFlex.value = withTiming(1, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false
            })
            cartTabFlex.value = withTiming(4, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            cartTabFlex.value = withTiming(1, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.favourite) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false
            })
            favouriteTabFlex.value = withTiming(4, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            favouriteTabFlex.value = withTiming(1, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                index: 4,
                animated: false
            })
            notificationTabFlex.value = withTiming(4, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            notificationTabFlex.value = withTiming(1, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
    }, [selectedTab])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                title={selectedTab.toUpperCase()}
                leftcomponent={
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderRadius: COLORS.gray2,
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => navigationDrawer.navigation.openDrawer()}
                    >
                        <Image
                            source={icons.menu}
                        />
                    </TouchableOpacity>
                }
                rightcomponent={
                    // <TouchableOpacity
                    //     style={{
                    //         borderRadius: SIZES.radius,
                    //         alignItems: 'center',
                    //         justifyContent: 'center',
                    //     }}
                    // >
                    //     <Image
                    //         source={dummyData?.myProfile.profile_image}
                    //         style={{
                    //             width: 40,
                    //             height: 40,
                    //             borderRadius: SIZES.radius
                    //         }}
                    //     />
                    // </TouchableOpacity>
                    <CartQuantityButton
                        quantity={cartnum}
                        onPress={() => navigationStack.navigate("MyCart")}
                    />
                }
            />

            {/*Content*/}
            <View
                style={{
                    flex: 1
                }}
            >
                <FlatList
                    ref={flatListRef}
                    horizontal={true}
                    scrollEnabled={false}
                    pagingEnabled={true}
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {item.label == constants.screens.home && <Home navigation={navigationStack} />}
                                {item.label == constants.screens.search && <Search />}
                                {item.label == constants.screens.cart && <CartTab />}
                                {item.label == constants.screens.favourite && <Favourite />}
                                {item.label == constants.screens.notification && <Notification />}

                            </View>
                        )

                    }}
                />
            </View>
            {/*Footer*/}

            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-end'
                }}
            >
                {/*Shadow*/}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.black
                    ]}
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}
                />

                {/*Tab*/}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        paddingBottom: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.white
                    }}
                >
                    <TabButton
                        label={constants.screens.home}
                        icons={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
                    />

                    <TabButton
                        label={constants.screens.search}
                        icons={icons.search}
                        isFocused={selectedTab == constants.screens.search}
                        outerContainerStyle={searchFlexStyle}
                        innerContainerStyle={searchColorStyle}
                        onPress={() => setSelectedTab(constants.screens.search)}
                    />

                    <TabButton
                        label={constants.screens.cart}
                        icons={icons.cart}
                        isFocused={selectedTab == constants.screens.cart}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorStyle}
                        onPress={() => setSelectedTab(constants.screens.cart)}
                    />

                    <TabButton
                        label={constants.screens.favourite}
                        icons={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        outerContainerStyle={favouriteFlexStyle}
                        innerContainerStyle={favouriteColorStyle}
                        onPress={() => setSelectedTab(constants.screens.favourite)}
                    />

                    <TabButton
                        label={constants.screens.notification}
                        icons={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        onPress={() => setSelectedTab(constants.screens.notification)}
                    />

                </View>

            </View>

        </Animated.View>
    )
}


function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab,
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
    (MainLayout)