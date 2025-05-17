import { StyleSheet, Text, View } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text>Report a Problem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
