import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomTopbar from '../../components/CustomTopbar';

import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    
    const navigation = useNavigation();

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');

    // 회원가입 버튼을 눌렀을 경우
    const onSignUpPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onExitPressed = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.default}>
            <CustomTopbar
                rightText='X'
                onPressRight={onExitPressed}
            />
            <Text style={styles.signUpText}>회원가입</Text>

            <Text style={styles.inputText}>Username</Text>
            <CustomInput
                name="username"
                control={control}
                placeholder="실명을 입력해주세요"
                rules={{
                    required: 'Username을 입력해주세요',
                    minLength: {
                        value: 3,
                        message: '3자 이상 입력해주세요'
                    },
                    maxLength: {
                        value: 18,
                        message: '18자 이하로 입력해주세요'
                    }
                }}
            />

            <Text style={styles.inputText}>Email</Text>
            <CustomInput
                name="email"
                control={control}
                placeholder="인증 가능한 이메일 주소"
                rules={{
                    pattern: { value: EMAIL_REGEX, message: '이메일 형식으로 입력해주세요' }
                }}
            />

            <Text style={styles.inputText}>Password</Text>
            <CustomInput
                name="password"
                placeholder="8자 이상"
                control={control}
                rules={{
                    required: '비밀번호를 입력해주세요',
                    minLength: {
                        value: 8,
                        message: '8자 이상 입력해주세요'
                    }
                }}
                secureTextEntry
            />

            <Text style={styles.inputText}>Confirm Password</Text>
            <CustomInput
                name="password-repeat"
                placeholder="비밀번호를 다시 입력해주세요"
                control={control}
                rules={{
                    validate: value =>
                    value === pwd || '일치하지 않습니다'
                }}
                secureTextEntry
            />

            <View style={{marginBottom: 15}} />

            <CustomButton
                onPress={handleSubmit(onSignUpPressed)}
                text="Sign Up"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    signUpText: {
        marginTop: '10%',
        marginLeft: '9%',
        marginBottom: 25,
        color: '#7382B5',
        fontSize: 22,
        fontWeight: '700'
    },
    inputText: {
        marginLeft: '9%',
        marginBottom: 3,
        color: '#545454',
        fontWeight: '500',
        fontSize: 14
    }
})

export default SignUpScreen;