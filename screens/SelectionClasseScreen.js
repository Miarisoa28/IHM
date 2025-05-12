import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const classes = [
  { id: 1, name: 'Classe 1' },
  { id: 2, name: 'Classe 2' },
  { id: 3, name: 'Classe 3' },
  // Ajoute ici d'autres classes si nécessaire
];

export default function SelectionClasseScreen({ navigation }) {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleNext = () => {
    if (selectedClass) {
      // Redirige vers l'écran de l'appel avec l'ID de la classe
      navigation.navigate('Appel', { classId: selectedClass });
    } else {
      alert('Veuillez sélectionner une classe');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez une classe</Text>

      <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue) => setSelectedClass(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Sélectionnez une classe" value={null} />
        {classes.map((classe) => (
          <Picker.Item key={classe.id} label={classe.name} value={classe.id} />
        ))}
      </Picker>

      <Button title="Continuer" onPress={handleNext} />
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});
