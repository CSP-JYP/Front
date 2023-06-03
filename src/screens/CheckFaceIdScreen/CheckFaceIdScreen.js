import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Image} from 'react-native'
import {Camera} from 'expo-camera'
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

let camera;

const CheckFaceIdScreen = () => {
  const [permission, setStartCamera] = React.useState(false)
  const [previewVisible, setPreviewVisible] = React.useState(false)
  const [capturedImage, setCapturedImage] = React.useState(null)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.front)

  const navigation = useNavigation();

  const startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    console.log(status)
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  const takePicture = async () => {
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }
  const savePhoto = () => {
    Alert.alert('Success!');
    navigation.navigate('Loading');
    setCapturedImage(null)
    setPreviewVisible(false)
    startCamera()
  }
  const retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    startCamera()
  }
  const switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  return (
    <View style={styles.container}>
      {permission ? (
        <View style={styles.camera}>
          {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />
          ) : (
            <Camera
              type={cameraType}
              style={{flex: 1}}
              ref={(r) => {
                camera = r
              }}
            >
              <View style={styles.camera2}>
                <View style={styles.camera3}>
                  <TouchableOpacity
                    onPress={switchCamera}
                    style={styles.switchCamera}
                  >
                    <AntDesign name="retweet" size={36} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.camera4}>
                  <View style={styles.takePicture}>
                    <TouchableOpacity
                      onPress={takePicture}
                      style={styles.takePictureButton}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <View style={styles.info}>
          <Text style={styles.infotext}>FACE ID</Text>
          <Image style={styles.faceID}
                source={require('../../img/faceID.png')}
                />
          <Text style={styles.faceIDtext}>본인 인증을 위해 face id를 입력합니다.</Text>
          <CustomButton
                onPress={startCamera}
                text="다음"
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const CameraPreview = ({photo, retakePicture, savePhoto}) => {
  return (
    <View style={styles.preview}>
      <ImageBackground
        source={{uri: photo && photo.uri}}
        style={{ flex: 1 }}
      >
        <View style={styles.preview2}>
          <View style={styles.preview3}>
            <TouchableOpacity
              onPress={retakePicture}
              style={styles.retakebtn}
            >
              <Text style={styles.retaketext}>
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={styles.savebtn}
            >
              <Text style={styles.savetext}>
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  camera2 :{
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  camera3: {
    position: 'absolute',
    right: '8%',
    top: '1%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  switchCamera: {
    marginTop: 20,
    borderRadius: '50%',
  },
  camera4: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  takePicture: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  takePictureButton: {
    width: 70,
    height: 70,
    bottom: 50,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  startCamera: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  startCameraButton: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  startCameraText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  preview: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  preview2: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-end'
  },
  preview3: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  retakebtn: {
    width: 130,
    height: 40,
    alignItems: 'center',
    borderRadius: 4
  },
  retaketext: {
    color: '#fff',
    fontSize: 20
  },
  savebtn: {
    width: 130,
    height: 40,

    alignItems: 'center',
    borderRadius: 4
  },
  savetext: {
    color: '#fff',
    fontSize: 20
  },
  info: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infotext: {
    fontSize: 37,
    fontWeight: 500,
    marginBottom: 100,
    marginTop: -60,
    color: '#5C5C5C'
  },
  faceIDtext: {
    fontSize: 16,
    color: '#5C5C5C',
    marginBottom: '15%',
    fontWeight: '500',
    lineHeight: 30,
  },
  faceID: {
    marginBottom: '20%',
    width: 200,
    height: 200,
  }
})

export default CheckFaceIdScreen;