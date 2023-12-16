import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

// Define the types for the sighting report details
type SightingReport = {
  title: string;
  description: string;
  location: string;
  // Add other fields as needed
};

const ReportSightings: React.FC = () => {
  const [report, setReport] = useState<SightingReport>({
    title: '',
    description: '',
    location: '',
    // Initialize other fields
  });

  const handleSubmit = () => {
    // Here you would typically send the report to a backend server
    // For now, we'll just log the report to the console
    console.log(report);
    Alert.alert('Report Submitted', 'Your UFO sighting report has been submitted.');
    // Reset the form fields
    setReport({ title: '', description: '', location: '' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={report.title}
        onChangeText={(text) => setReport({ ...report, title: text })}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={report.description}
        onChangeText={(text) => setReport({ ...report, description: text })}
        placeholder="Description"
        style={styles.input}
        multiline
      />
      <TextInput
        value={report.location}
        onChangeText={(text) => setReport({ ...report, location: text })}
        placeholder="Location"
        style={styles.input}
      />
      {/* Add other input fields as needed */}
      <Button title="Submit Report" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default ReportSightings;
