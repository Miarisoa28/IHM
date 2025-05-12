import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Picker } from 'react-native';

// Liste simulée des étudiants exclus pour chaque classe et matière
const excludedStudents = [
  { matricule: '12345', nom: 'Dupont', prenom: 'Jean', classe: 'Mathématiques', matière: 'Informatique' },
  { matricule: '67890', nom: 'Martin', prenom: 'Marie', classe: 'Physique', matière: 'Mathématiques' },
  { matricule: '11223', nom: 'Durand', prenom: 'Pierre', classe: 'Mathématiques', matière: 'Physique' },
  // Ajoute d'autres étudiants ici
];

const classes = ['Mathématiques', 'Physique', 'Informatique']; // Liste des classes
const matières = ['Informatique', 'Mathématiques', 'Physique']; // Liste des matières

export default function BaseDeDonneesScreen() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [selectedSubject, setSelectedSubject] = useState(matières[0]);
  
  // Filtrer les étudiants exclus en fonction de la classe et de la matière sélectionnées
  const filteredStudents = excludedStudents.filter(
    student => student.classe === selectedClass && student.matière === selectedSubject
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Base de Données des Étudiants Exclu(e)s</Text>
      
      <Text>Choisir une classe :</Text>
      <Picker
        selectedValue={selectedClass}
        onValueChange={itemValue => setSelectedClass(itemValue)}
        style={styles.picker}
      >
        {classes.map((className, index) => (
          <Picker.Item key={index} label={className} value={className} />
        ))}
      </Picker>
      
      <Text>Choisir une matière :</Text>
      <Picker
        selectedValue={selectedSubject}
        onValueChange={itemValue => setSelectedSubject(itemValue)}
        style={styles.picker}
      >
        {matières.map((subject, index) => (
          <Picker.Item key={index} label={subject} value={subject} />
        ))}
      </Picker>

      <FlatList
        data={filteredStudents}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.matricule}</Text>
            <Text style={styles.cell}>{item.nom} {item.prenom}</Text>
            <Text style={styles.cell}>{item.classe}</Text>
            <Text style={styles.cell}>{item.matière}</Text>
          </View>
        )}
        keyExtractor={item => item.matricule}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    width: 100,
    textAlign: 'center',
  },
});
