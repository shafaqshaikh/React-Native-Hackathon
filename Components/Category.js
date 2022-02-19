import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const Category = ({name, image, description}) => {
  return (
    <View style={{height: 130, marginTop: 20}}>
      <View
        style={{
          height: 150,
          width: 200,
          marginLeft: 10,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          borderRadius: 20,
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
            source={{
              uri: image,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 5,
            paddingTop: 5,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'blue', alignSelf: 'center'}}> {name}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Category;
