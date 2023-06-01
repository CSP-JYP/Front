import React from 'react';
import { Text, View, StyleSheet, Alert, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    // 인증코드 재전송 버튼을 눌렀다면
    const onResendPressed = async () => {

        try {
            Alert.alert('인증 이메일 전송 완료', '인증 이메일이 전송되었습니다');

        } catch (e) {

            Alert.alert('Error', e.message);

        }
    }

    const onConfirmPressed = async () => {
        navigation.navigate('RegisterFaceId');
    }

    return (
        <View style={styles.default}>
            <View style={styles.signInTextContainer}>
                <Text style={styles.signInText}>이메일 인증</Text>
                <Text style={styles.signInTextS}>인증 이메일이 전송되었습니다.</Text>
            </View>
            <CustomButton
                onPress={handleSubmit(onConfirmPressed)}
                text="Confirm"
            />
            <Pressable onPress={onResendPressed}>
                <Text style={styles.otherButtonText}>인증코드 다시 받기</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    signInTextContainer: {
        marginTop: '40%',
        marginLeft: '9%',
        marginBottom: 20
    },
    signInText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#7382B5',
        lineHeight: 29.3,
        marginBottom: 16,
    },
    signInTextS: {
        fontSize: 16,
        fontWeight: '300',
        color: '#7382B5',
        marginTop: 12,
        marginBottom: 80,
        color: '#1D4999'
    },
    otherButtonText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#1D4999',
        marginTop: '4%',
        alignSelf: 'center'
    }
})

export default ConfirmEmailScreen;