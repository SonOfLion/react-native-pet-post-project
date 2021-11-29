import React from 'react';
import { StyleSheet, View, Pressable, TextInput, Text } from 'react-native';
import { Formik } from 'formik';

// import { globalStyle } from '../styles/styles';

export default function Form({ addNewArticle }) {
  return (
    <View>
      <Formik initialValues={{name: '', anons: '', full: '' , img: ''}} onSubmit={(values, clearField) => {
        addNewArticle(values);
        clearField.resetForm();
      }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.inputForm}
              value={props.values.name}
              placeholder={'Enter you`re name'}
              onChangeText={props.handleChange('name')}
            />
            <TextInput
              style={styles.inputForm}
              value={props.values.anons}
              multiline
              placeholder={'Enter you`re anons'}
              onChangeText={props.handleChange('anons')}
            />
            <TextInput
              style={styles.inputForm}
              value={props.values.full}
              multiline
              placeholder={'Enter you`re info'}
              onChangeText={props.handleChange('full')}
            />
            <TextInput
              style={styles.inputForm}
              value={props.values.img}
              placeholder={'Enter you`re photo'}
              onChangeText={props.handleChange('img')}
            />
            <Pressable style={styles.btnForm} title={'ADD'} onPress={props.handleSubmit}>
              <Text style={styles.text}>ADD</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 4,
  },
  btnForm: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
