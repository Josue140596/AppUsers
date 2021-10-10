import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import { NavigationProps} from '../navigation/NavigationStack';

const SigInScreen = () => {
  const {height, width} = useWindowDimensions();
	const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.BackGroundSigIn}>
      <View
        style={{
          ...styles.contentSigIn,
          width: width * 0.8,
          height: height * 0.8,
        }}>
        <View>
          <Text style={styles.TitleSigIn}>SignIn</Text>
        </View>
        <View style={styles.ContentFormSigIn}>
          <TextInput
						style={{...styles.inputs, width: width * 0.70, height: height * 0.07}}
            placeholder="User Name"
            placeholderTextColor="#d8d8d8bd"
            selectionColor="white"
            theme={{colors: {text: 'white', primary: 'rgb(23, 157, 227)'}}}
            right={<TextInput.Icon color="#d8d8d8bd" name="account" />}
          />
          <TextInput
            style={{...styles.inputs, width: width * 0.70, height: height * 0.07}}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8d8d8bd"
            theme={{colors: {text: 'white', primary: 'rgb(23, 157, 227)'}}}
            right={<TextInput.Icon color="#d8d8d8bd" name="eye" />}
          />
          <Button
            icon="send"
            mode="contained"
						style={{...styles.btnSend, width: width * 0.5, height: height * 0.06 }}
            onPress={() => console.log('Send')}>
            Send
          </Button>
				<Text style={styles.txtHaveAccount}>Don't you have account yet?</Text>
					<Button
						mode='text'
						uppercase={false}
						color="white"
						onPress={()=>navigation.navigate("SignUpScreen")}
					>
						SigUp
					</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackGroundSigIn: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
		
  },
  contentSigIn: {
    backgroundColor: '#1d1d1d',
    borderRadius: 5,
    justifyContent: 'center',
		
  },
  TitleSigIn: {
    marginTop: 16,
		marginBottom: 16,
    paddingVertical: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
	ContentFormSigIn:{
		alignItems: 'center',
	
	},
	inputs:{
		backgroundColor: "#121212",
		marginTop: 10,
		marginBottom: 10,
		color: "white",
		
	},
	btnSend:{
		backgroundColor: "rgb(23, 157, 227)",
		marginTop: 15,
		marginBottom: 15,
	},
	txtHaveAccount:{
		color: "#d8d8d8bd"
	}
});
export default SigInScreen;
