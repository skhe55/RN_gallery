import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { setLikePhoto, setDelPhoto } from '../store/redux/photoReducer';
function Photo(props: any) {
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(false);
    const AddImage = (img: any) => {
        dispatch(setLikePhoto(img))
    }
    const DeleteImage = (img: any) => {
        dispatch(setDelPhoto(img))
    }
    useEffect(() => {
        props.route.params.item.likeExist === true ? setDisable(true) : setDisable(false);
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: props.route.params.item.urls.full }}
                />
            </View>
            <View style={styles.containerButtons}>
                <View style={styles.buttonUp}>
                    <View style={styles.flexRowDir}>
                        <Icon
                            name='heart-outline'
                            type='ionicon'
                        />
                        <TouchableOpacity onPress={() => AddImage(props.route.params.item.id)} disabled={disable}>
                            <Text style={styles.textStyles}>Добавить в избранное</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.underLine} />
                <View style={styles.buttonDown}
                >
                    <View style={styles.flexRowDir}>
                        <Icon
                            name='trash-outline'
                            type='ionicon'
                        />
                        <TouchableOpacity onPress={() => DeleteImage(props.route.params.item.id)}>
                            <Text style={styles.textStyles}>Удалить изображение</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButtons: {
        flex: 0.2,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    buttonUp: {
        backgroundColor: '#DDDDDD',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '90%',
        height: '30%',
        marginLeft: '4.5%',
    },
    buttonDown: {
        backgroundColor: '#DDDDDD',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '90%',
        height: '30%',
        marginLeft: '4.5%',
    },
    underLine: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: '90%',
        height: '1%',
        marginLeft: '4.5%',
    },
    imageContainer: {
        flex: 0.8,
    },
    image: {
        height: '100%',
    },
    textStyles: {
        color: 'black',
        fontWeight: '600',
    },
    flexRowDir: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})

export default Photo
