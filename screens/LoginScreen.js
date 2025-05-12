import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Utilisateur fictif pour l'exemple
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'professeur', password: 'prof123', role: 'professeur' },
];

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de connexion
  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // Si l'utilisateur est administrateur, il peut consulter la base de données
      if (user.role === 'admin') {
        navigation.navigate('Base de Données');
      } else {
        Alert.alert('Erreur', 'Vous devez être administrateur pour consulter la base de données.');
      }
    } else {
      Alert.alert('Erreur', 'Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <Text>Nom d'utilisateur</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />

      <Text>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
