import * as Linking from 'expo-linking';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => Linking.openURL('deeplink://profile/John/Doe')}
      />
    </View>
  );
}