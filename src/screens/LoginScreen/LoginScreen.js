import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useForm } from 'react-hook-form';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit } = useForm();

    const onSignInPressed = async (data) => {
        
        // load가 이미 됐다면,
        if (loading) {
            return; 
        }

        // loading true로 바꾸고
        setLoading(true);

        navigation.navigate('Home');
    };

    // 계정이 없다면
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.default}>
            <View style={styles.signInTextContainer}>
                <Text style={styles.signInText}>안녕하세요,</Text>
                <Text style={styles.signInText}>SafeSign 입니다.</Text>
                <Text style={styles.signInTextS}>서비스 이용을 위해 로그인 해주세요.</Text>
            </View>
            <CustomInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{
                    required: 'Email을 입력해주세요'
                }}
            />
            <CustomInput
                name="password"
                placeholder="Password"
                control={control}
                rules={{
                    required: 'Password를 입력해주세요',
                    minLength: { value: 8, message: '8자 이상 입력해주세요'}
                }}
                secureTextEntry
            />
            <CustomButton
                onPress={handleSubmit(onSignInPressed)}
                text="Sign In"
            />
            <View style={styles.otherButtonContainer}>
                <Pressable onPress={onSignUpPressed}>
                    <Text style={styles.otherButtonText}>회원가입하기</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    signInTextContainer: {
        marginTop: '23%',
        marginLeft: '9%'
    },
    signInText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#1D4999',
        lineHeight: 30,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 50,
        color: '#545454'
    },
    line: {
        width: '83%',
        alignSelf: 'center',
        borderBottomColor: '#1D4999',
        borderBottomWidth: 1,
        marginTop: 10
    },
    image: {
        alignSelf: 'center',
        marginTop: 20
    },
    otherButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    otherButtonText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#1D4999'
    }
});

export default LoginScreen;