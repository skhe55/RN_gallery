import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector, } from 'react-redux';

function Favorite({ navigation }: any) {
    const favor = useSelector(state => state.photosReducer.favor);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (favor !== undefined) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, []);
    return (
        <View style={stylesHome.container}>
            <ScrollView>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        numColumns={4}
                        horizontal={false}
                        data={favor}
                        renderItem={({ item }) => (
                            <View style={stylesHome.containerImage}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Photo', { item })}
                                >
                                    <ImageBackground
                                        style={stylesHome.imageStyle}
                                        source={{ uri: item.urls.small }}
                                    >
                                        <View style={{ top: '73%', left: 3, position: 'absolute', }}>
                                            <Icon
                                                color='#ff2400'
                                                name='heart'
                                                type='ionicon'
                                                size={18}
                                            />
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}
            </ScrollView>
        </View >
    )
}

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
    },
    containerImage: {
        flex: 1 / 4,
        margin: 3,
    },
    imageStyle: {
        borderRadius: 20,
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
    },
})

export default Favorite



