import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { CardItem, Header, IconButton, TextButton } from "../../components"
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const MyCard = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [subtotal, setSubtotal] = React.useState(0)

    React.useEffect(() => {
        let { total } = route.params
        setSubtotal(total)
    })

    function renderHeader() {
        return (
            <Header
                title="My CARD"
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

    function renderMyCards() {
        return (
            <View>
                {dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    function renderAddNewCard() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Add new card</Text>

                {dummyData.allCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`NewCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    disabled={selectedCard == null}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCard == null ? COLORS.gray : COLORS.primary
                    }}
                    label={selectedCard?.key == "NewCard" ? "Add" : "Place Your Order"}
                    onPress={() => {
                        if (selectedCard?.key == "NewCard") {
                            navigation.navigate("AddCard", { selectedCard: selectedCard })
                        } else {
                            navigation.navigate("Checkout", { selectedCard: selectedCard, subtotal: subtotal })
                        }
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
            {/* Hearder */}
            {renderHeader()}
            {/* Card */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* My Card */}
                {renderMyCards()}

                {/* Add New Card */}
                {renderAddNewCard()}
            </ScrollView>
            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default MyCard;