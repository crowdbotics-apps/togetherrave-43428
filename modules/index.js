import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Welcome Back!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  button: {
    width: '80%',
    backgroundColor: '#4B9DFE',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  forgotPassword: {
    color: '#333',
    marginTop: 20
  },
  signUp: {
    color: '#4B9DFE',
    marginTop: 20
  }
});
export default LoginScreen;