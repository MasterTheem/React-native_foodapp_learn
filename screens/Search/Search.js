import React from 'react';
import {
    View, Text, FlatList
} from 'react-native';

import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

import { Techercard } from '../../components';


const Search = () => {

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View style={{ marginTop: 40 }}>
                {dummyData.credit.map((item, index) => {
                    return (
                        <Techercard
                            key={`id-${index}`}
                            containerstyle={{
                                height: 70,
                                marginHorizontal: SIZES.padding,
                                marginBottom: 30
                            }}
                            name={item.name}
                            descrip={item.descrip}
                        />
                    )
                })}
            </View>

        </View>
    )
}

export default Search