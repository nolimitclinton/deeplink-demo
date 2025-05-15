import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  const { firstname, lastname } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>First Name: {firstname}</Text>
      <Text style={{ fontSize: 24 }}>Last Name: {lastname}</Text>
    </View>
  );
}