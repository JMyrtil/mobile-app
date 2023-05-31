import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [contact, setContact] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getRandomContact = () => {
    const contacts = [
      { name: 'John Doe', phone: '1234567890' },
      { name: 'Jane Smith', phone: '0987654321' },
    ];

    const randomIndex = Math.floor(Math.random() * contacts.length);
    const selectedContact = contacts[randomIndex];

    setContact(selectedContact);
  };

  const pickRandomPicture = () => {
    const pictures = [
      { uri: 'https://example.com/image1.jpg' },
      { uri: 'https://example.com/image2.jpg' },
    ];

    const randomIndex = Math.floor(Math.random() * pictures.length);
    const selectedPicture = pictures[randomIndex];

    setSelectedImage(selectedPicture);
  };

  const sendPictureToContact = () => {
    if (contact && selectedImage) {
      console.log(`Sending picture ${selectedImage.uri} to contact ${contact.name}`);
    }
  };

  return (
    <View style={styles.container}>
      {contact ? (
        <View style={styles.contact}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactPhone}>{contact.phone}</Text>
        </View>
      ) : (
        <Text style={styles.noContact}>No contact selected</Text>
      )}

      <Button title="Select random contact" onPress={getRandomContact} />
      <Button title="Select random picture" onPress={pickRandomPicture} />
      <Button title="Send picture" onPress={sendPictureToContact} disabled={!contact || !selectedImage} />

      {selectedImage && <Image source={{ uri: selectedImage.uri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    marginBottom: 20,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  contactPhone: {
    fontSize: 16,
  },
  noContact: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
