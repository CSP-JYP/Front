import React, { useRef, useState } from 'react';
import { Dimensions, PanResponder, View, StyleSheet, Text, Alert } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const GesturePath = ({ path, color }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <Svg height="100%" width="100%" viewBox={`0 0 ${width} ${height}`}>
      <Polyline
        points={path.map(p => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="5"
      />
    </Svg>    
  );
};

const GestureRecorder = ({ onPathChanged }) => {
  const pathRef = useRef([]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => { pathRef.current = [] },
      onPanResponderMove: (event, gestureState) => {
        const { moveX, moveY } = gestureState;
        pathRef.current.push({
          x: moveX,
          y: moveY,
        });
        onPathChanged([...pathRef.current]);
      },
      onPanResponderRelease: () => { }
    })
  ).current;

  return (
    <View
      style={styles.sign}
      {...panResponder.panHandlers}
    />
  );
};

let count = 0;

  const RegisterSignScreen = () => {

    const { control, handleSubmit } = useForm();
    const [path, setPath] = useState([]);

    const navigation = useNavigation();

    const saveSign = () => {
    count++;
    if (count == 1) Alert.alert('Success! (1/5)');
    else if (count == 2) Alert.alert('Success! (2/5)');
    else if (count == 3) Alert.alert('Success! (3/5)');
    else if (count == 4) Alert.alert('Success! (4/5)');
    else if (count == 5) {
      Alert.alert('Success! (5/5)');
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.sign}>
        <View style={styles.info}> 
            <Text style={styles.infotext}>SIGN</Text>
        </View>
        <GesturePath path={path} color="black" />
        <GestureRecorder onPathChanged={setPath} />
        <View style={styles.detail}>
            <Text style={styles.faceIDtext}>계약서를 작성 및 열람 시 사용할 sign을 입력합니다.</Text>
        </View>
        <View style={styles.btn}>
        <CustomButton
                onPress={handleSubmit(saveSign)}
                text="다음"
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sign: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // 너비를 100%로 설정
    height: '100%', // 높이를 100%로 설정
    position: 'absolute',
  },
  info: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -140,
  },
  infotext: {
    fontSize: 37,
    fontWeight: 500,
    color: '#5C5C5C'
  },
  detail: {
    marginBottom: 250,
    marginTop: -250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginBottom: 200,
    marginTop: -200,
    width: '100%'
  }
});

export default RegisterSignScreen;
