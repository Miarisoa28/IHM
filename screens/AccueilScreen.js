import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez une action</Text>

      <Button
        title="Faire l'appel"
        onPress={() => navigation.navigate('Sélection Classe')} // Navigue vers l'écran de sélection de classe
      />

      <Button
        title="Consulter la base de données"
        onPress={() => navigation.navigate('Login')} // Navigue vers l'écran de connexion
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
