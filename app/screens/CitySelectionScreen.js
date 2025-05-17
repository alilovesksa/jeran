import { StyleSheet, Text, View } from 'react-native';

export default function CitySelectionScreen() {
  return (
    <View style={styles.container}>
      <Text>Select your city</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
