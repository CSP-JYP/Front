import React, { useState }from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useForm } from 'react-hook-form';

const SendContractScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit } = useForm();

    const onSendPressed = () => {
        Alert.alert('전송이 완료되었습니다.');
    }

    return (
        <View style={styles.default}>
            <View style={styles.synchro}></View>
                <Text style={styles.synchroText}>sign : 97.658 %</Text>
                <Text style={styles.synchroText}>face : 98.21 %</Text>
            <View style={styles.info}></View>
                <Text style={styles.infoText}>본인인증 완료!</Text>
            <View style={styles.email}></View>
                <CustomInput
                    name="email"
                    placeholder="상대방 Email"
                    control={control}
                    rules={{
                        required: 'Email을 입력해주세요'
                    }}
                />
            <View style={styles.btn}>
                <CustomButton
                    onPress={handleSubmit(onSendPressed)}
                    text="전송"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: '100%'
    },
    synchro: {
        marginTop: '20%',
    },
    synchroText: {
        fontSize: 15,
        fontWeight: '300',
        marginTop: 5,
        color: '#545454'
    },
    info: {
        marginTop: '20%',
    },
    infoText: {
        fontSize: 36,
        fontWeight: '700',
        color: '#545454'
    },
    email: {
        marginTop: '25%',
        width: '100%',
    },
    btn: {
        marginTop: '50%',
        width: '100%',
    },
});

export default SendContractScreen;