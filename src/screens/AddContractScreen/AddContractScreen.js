import React from "react";
import { StyleSheet, View, Image, TextInput, Text, ImageBackground, Button, TouchableOpacity, Alert  } from "react-native";

import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useForm } from 'react-hook-form';

const AddContractScreen = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    const onAddContractPressed = () => {
        Alert.alert('이대로 계약서를 저장할까요?')
        navigation.navigate('CheckSign');
    }

    const onSignPressed = () => {
        console.log('sign');
    }

    return (
        <View style={styles.default}>
            <View style={styles.contract}>
                <ImageBackground style={styles.contractimg}
                source={require('../../img/contract.png')}
                >
                <TextInput style={styles.input}></TextInput>
                <TextInput style={styles.input2}></TextInput>
                <View style={styles.input3}>
                    <TextInput style={styles.input4}></TextInput>
                    <TextInput style={styles.input5}></TextInput>
                    <TextInput style={styles.input6}></TextInput>
                </View>
                <View style={styles.input7}>
                    <TextInput style={styles.input8}></TextInput>
                    <TouchableOpacity style={styles.sign} onPress={onSignPressed}></TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
            <View style={styles.finishbtn}>
                <Text style={styles.info}>완료를 누르시면 서명을 입력할 수 있는 페이지로 넘어갑니다.</Text>
                <CustomButton
                    onPress={handleSubmit(onAddContractPressed)}
                    text="완료"
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contract: {
        flex: 7,
        alignItems: 'center',
        
        marginTop: 20,
        marginBottom: 20,
    },
    contractimg: {
        width: '100%',
        height: '98%'
    },
    finishbtn: {
        flex: 1,
        width: '100%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        width: 75,
        height: 17,
        paddingLeft: 7,
        marginTop: '9%',
        marginLeft: 20,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    input2: {
        backgroundColor: '#D9D9D9',
        width: 60,
        height: 17,
        paddingLeft: 7,
        marginTop: '-4%',
        marginRight: '29%',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
    },
    input3: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        marginTop: '112%',
        marginLeft: '28%'
    },
    input4: {
        backgroundColor: '#D9D9D9',
        width: 87,
        height: 13,
    },
    input5: {
        backgroundColor: '#D9D9D9',
        width: 87,
        height: 13,
        marginTop: 2,
    },
    input6: {
        backgroundColor: '#D9D9D9',
        width: 87,
        height: 13,
        marginTop: 2,
    },
    input7: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: '17%',
        marginTop: -45,
    },
    input8: {
        backgroundColor: '#D9D9D9',
        width: 87,
        height: 13,
    },
    sign: {
        width: 77,
        height: 35,
        marginTop: 3,
        marginLeft: 5,
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center"
      },
      info: {
        alignSelf: 'center',
        marginTop: -20,
        marginBottom: 10,
        color: '#4A4A4A'
      }
});

export default AddContractScreen;