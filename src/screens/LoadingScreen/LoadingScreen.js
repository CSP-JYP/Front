import React from "react";
import { Text, View, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useForm } from 'react-hook-form';

const LoadingScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    const next = () => {
        navigation.navigate('SendContract');
    }    

    return (
        <View style = {styles.default}>
            <View style = {styles.gif}>
                <Image style={styles.loading}
                source={require('../../img/loading.gif')}/>
            </View>
            <Text style={styles.text}>본인 인증을 진행합니다.</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={next}/>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    gif: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
    },
    loading: {
        marginTop: 250,
        // width: '100%',
        // height: '100%',
    },
    text: {
        flex: 1,
        marginTop: 50,
        fontSize: 16,
        alignSelf: 'center',
    },
    button: {
        //backgroundColor: "black",
        flex: 1,
    }
});

export default LoadingScreen;