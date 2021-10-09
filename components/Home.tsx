import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

const Home = ({ navigation }: any) => {
    const photos = useSelector(state => state.photosReducer.photos);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        dispatch({ type: 'FETCH_PHOTOS' });
        setLoading(false);
    }, []);
    return (
        <View style={stylesHome.container}>
            <ScrollView>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        numColumns={4}
                        horizontal={false}
                        data={photos}
                        renderItem={({ item }) => (
                            <View style={stylesHome.containerImage}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Photo', { item })}
                                >
                                    {item.likeExist !== undefined && item.likeExist !== false ?
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
                                        : <ImageBackground
                                            style={stylesHome.imageStyle}
                                            source={{ uri: item.urls.small }}
                                        >
                                        </ImageBackground>
                                    }
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
        flex: 1,
        margin: 3,
    },
    imageStyle: {
        borderRadius: 20,
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
    },
})

export default Home;
