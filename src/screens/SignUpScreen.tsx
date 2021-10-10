import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

const SignUpScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.BackGroundSignUp}>
      <View
        style={{
          ...styles.contentSignUp,
          width: width * 0.8,
          height: height * 0.8,
        }}>
        <View>
          <Text style={styles.TitleSignUp}>SignUp</Text>
        </View>
        <View style={styles.ContentFormSignUp}>
          <TextInput
            style={{
              ...styles.inputs,
              width: width * 0.7,
              height: height * 0.07,
            }}
            placeholder="User Name"
            placeholderTextColor="#d8d8d8bd"
            selectionColor="white"
            theme={{colors: {text: 'white', primary: 'rgb(23, 157, 227)'}}}
            right={<TextInput.Icon color="#d8d8d8bd" name="account" />}
          />
          <TextInput
            style={{
              ...styles.inputs,
              width: width * 0.7,
              height: height * 0.07,
            }}
            placeholder="Email"
            placeholderTextColor="#d8d8d8bd"
            autoCompleteType="email"
            selectionColor="white"
            theme={{colors: {text: 'white', primary: 'rgb(23, 157, 227)'}}}
            right={<TextInput.Icon color="#d8d8d8bd" name="email" />}
          />
          <TextInput
            style={{
              ...styles.inputs,
              width: width * 0.7,
              height: height * 0.07,
            }}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8d8d8bd"
            theme={{colors: {text: 'white', primary: 'rgb(23, 157, 227)'}}}
            right={<TextInput.Icon color="#d8d8d8bd" name="eye" />}
          />
          <Button
            icon="send"
            mode="contained"
            style={{
              ...styles.btnSend,
              width: width * 0.5,
              height: height * 0.06,
            }}
            onPress={() => console.log('Send')}>
            Send
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackGroundSignUp: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentSignUp: {
    backgroundColor: '#121212',
    borderRadius: 5,
    justifyContent: 'center',
  },
  TitleSignUp: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  ContentFormSignUp: {
    alignItems: 'center',
  },
  inputs: {
    backgroundColor: '#1d1d1d',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  btnSend: {
    backgroundColor: '#35e060',
    marginTop: 15,
    marginBottom: 15,
  },
});
export default SignUpScreen;
