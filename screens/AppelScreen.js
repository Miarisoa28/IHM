import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Picker, CheckBox, FlatList } from 'react-native';

const students = [
  { matricule: '12345', nom: 'Dupont', prenom: 'Jean' },
  { matricule: '67890', nom: 'Martin', prenom: 'Marie' },
  { matricule: '11223', nom: 'Durand', prenom: 'Pierre' },
  // Ajoute d'autres élèves ici
];

const subjects = ['Mathématiques', 'Physique', 'Informatique']; // Liste des matières

export default function AppelScreen() {
  const [selectedClass, setSelectedClass] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [attendance, setAttendance] = useState(
    students.map(student => ({
      ...student,
      present: false,
      absent: false,
      late: false,
    }))
  );

  // Calcul de la durée du cours
  const calculateDuration = () => {
    if (startTime && endTime) {
      const start = new Date(`1970-01-01T${startTime}:00`);
      const end = new Date(`1970-01-01T${endTime}:00`);
      const duration = (end - start) / 1000 / 60; // Durée en minutes
      return duration;
    }
    return 0;
  };

  // Fonction pour changer l'état de présence d'un élève
  const handleAttendanceChange = (index, type) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index][type] = !updatedAttendance[index][type];
    setAttendance(updatedAttendance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faire l'appel</Text>

      <TextInput
        style={styles.input}
        placeholder="Choisir la classe"
        value={selectedClass}
        onChangeText={setSelectedClass}
      />

      <TextInput
        style={styles.input}
        placeholder="Heure de début (HH:MM)"
        value={startTime}
        onChangeText={setStartTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Heure de fin (HH:MM)"
        value={endTime}
        onChangeText={setEndTime}
      />

      <Text>Durée du cours : {calculateDuration()} minutes</Text>

      <Picker
        selectedValue={selectedSubject}
        onValueChange={itemValue => setSelectedSubject(itemValue)}
        style={styles.picker}
      >
        {subjects.map((subject, index) => (
          <Picker.Item key={index} label={subject} value={subject} />
        ))}
      </Picker>

      <FlatList
        data={attendance}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.matricule}</Text>
            <Text style={styles.cell}>{item.nom} {item.prenom}</Text>
            <CheckBox
              value={item.present}
              onValueChange={() => handleAttendanceChange(index, 'present')}
            />
            <Text>Présent</Text>
            <CheckBox
              value={item.absent}
              onValueChange={() => handleAttendanceChange(index, 'absent')}
            />
            <Text>Absent</Text>
            <CheckBox
              value={item.late}
              onValueChange={() => handleAttendanceChange(index, 'late')}
            />
            <Text>En retard</Text>
          </View>
        )}
        keyExtractor={item => item.matricule}
      />

      <Button title="Enregistrer l'appel" onPress={() => alert('Appel enregistré!')} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
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
  },
  cell: {
    width: 80,
    textAlign: 'center',
  },
});
