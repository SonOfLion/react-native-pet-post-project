import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Modal } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Form from './Form';

import { globalStyle } from '../styles/styles';

export default function MainPage({ navigation }) {
  const [news, setNews] = useState([
    { name: 'Google', anons: 'About Google', full: 'Google is very big the company', key: '1', img: 'https://avdet.org/wp-content/uploads/2016/08/logotip-google.jpg' },
    { name: 'Apple', anons: 'About Apple', full: 'Apple is very big the company', key: '2', img: 'https://cdn.iphoneincanada.ca/wp-content/uploads/2013/09/Logo-Apple-iPhone.jpg' },
    { name: 'Facebook', anons: 'About Facebook', full: 'Facebook is very big the company', key: '3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHDMZSSIwZFC6V6e2rmzGEiuDCD3dtwgioME3MLh2InI6Q_fTEE2RyuBJWMc-5eH7eA&usqp=CAU' },
  ]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addNewArticle = (article) => {
    setNews((list) => {
      article.key = Math.random() * 9999;
      return [
        article,
        ...list,
      ];
    });
    setIsOpenModal(false);
  };

  // const nextPage = () => {
  //   navigation.navigate('Contacts');
  // };

  return (
    <View style={globalStyle.main}>
      <Modal visible={isOpenModal}>
        <View style={styles.blockIconClose}>
          <AntDesign name='closecircle' size={24} color='red' onPress={() => setIsOpenModal(false)} />
        </View>
        <View>
          <Text style={styles.title}>Form to add news</Text>
          <Form addNewArticle={addNewArticle} />
        </View>
      </Modal>
      <View flexDirection={'row'} textAlign={'center'} justifyContent={'center'}>
        <Text style={styles.addNews}>Add news</Text>
        <Ionicons name='add-circle' size={26} color='black' onPress={() => setIsOpenModal(true)} />
      </View>
      <Text style={[globalStyle.title, styles.header]}>Main page</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Contacts', item)}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
            <Image style={styles.image} source={{ uri: item.img }} />
          </TouchableOpacity>
        )} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 10
  },
  title: {
    fontFamily: 'ka-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  anons: {
    fontFamily: 'ka-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 60,
  },
  blockIconClose: {
   display: 'flex',
    alignItems: 'flex-end',
  },
  addNews: {
    fontSize: 18,
    fontFamily: 'ka-light',
    textTransform: 'uppercase',
  },
})

// <View width={ 200 } marginHorizontal={ 20 }>
//   <Button title={'Open contact page'} onPress={nextPage} color={'#5c0347'} />
// </View>
