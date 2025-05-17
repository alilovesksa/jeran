import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { useRef, useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import firebaseApp from '../../services/firebase'; // Adjust this if needed

const LoginScreen = () => {
  const recaptchaVerifier = useRef(null);
  const auth = getAuth(firebaseApp);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState('');

  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const id = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      setVerificationId(id);
      Alert.alert('رمز التحقق أُرسل بنجاح', 'أدخل الرمز الذي وصلك عبر الرسائل النصية.');
    } catch (err) {
      console.log(err);
      Alert.alert('حدث خطأ', err.message);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, code);
      await signInWithCredential(auth, credential);
      Alert.alert('تم تسجيل الدخول!', 'مرحبًا بك 👋');
    } catch (err) {
      console.log(err);
      Alert.alert('رمز غير صالح', 'تحقق من الرقم الذي أدخلته.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/saudi-pattern.png')} style={styles.background}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseApp.options}
      />
      <View style={styles.container}>
        <Text style={styles.title}>مرحبًا بك في جيران</Text>
        <TextInput
          placeholder="+966xxxxxxxxx"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />
        {verificationId ? (
          <>
            <TextInput
              placeholder="رمز التحقق"
              onChangeText={setCode}
              keyboardType="number-pad"
              style={styles.input}
            />
            <Button title="تأكيد الرمز" onPress={confirmCode} />
          </>
        ) : (
          <Button title="أرسل رمز التحقق" onPress={sendVerification} />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#006c35' },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    textAlign: 'right',
  },
});

export default LoginScreen;
