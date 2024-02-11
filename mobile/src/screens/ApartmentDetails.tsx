import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Apartment {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const ApartmentDetailScreen = ({ route }) => {
  const { apartment } = route.params as { apartment: Apartment };

  const handleButtonPress = () => {
    Alert.alert(
      'Hello!',
      'This is a funny message or anything else you want to display!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: apartment.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{apartment.name}</Text>
        <Text style={styles.description}>{apartment.description}</Text>
        <Button title="Show Funny Message" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ApartmentDetailScreen;
