import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onContractPressed = () => {
        navigation.navigate('Contract');
    }

    const onAddContractPressed = () => {
        navigation.navigate('AddContract')
    }

    return (
        <View style={styles.default}>
            <View>
                <Image style={styles.profile}
                source={require('../../img/user.png')}
                />
            </View>
            <Pressable
            onPress={handleSubmit(onContractPressed)}
            style={styles.container}
            >
            <Text style={styles.text1}>
                표준근로계약서                               ...
            </Text>
            <Text style={styles.text2}>
                숭실대학교
            </Text>
            </Pressable>
            <Pressable
            onPress={handleSubmit(onAddContractPressed)}
            style={styles.plusbtn}
            >
            <Text style={styles.plustext}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        width: '83%',
        height: 75,
        alignItems: 'left',
        marginBottom: 11,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text1: {
        color: '#747474',
        marginTop: '2%',
        marginLeft: '7%',
        fontWeight: '700',
        marginBottom: 11,
        fontSize: 20
    },
    text2: {
        color: '#747474',
        fontWeight: '500',
        marginLeft: '7%',
        marginBottom: 11,
        fontSize: 14
    },
    profile: {
        width: 50,
        height: 50,
        marginTop: '7%',
        marginBottom: '10%',
        marginRight: '10%',
        alignSelf: "flex-end",
    },
    plusbtn: {
        backgroundColor: '#B6DDFA',
        width: 60,
        height: 60,
        borderRadius: 35,
        marginTop: '110%',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: '10%',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    plustext: {
        color: '#FFFFFF',
        fontSize: 25,
    }
});

export default HomeScreen;