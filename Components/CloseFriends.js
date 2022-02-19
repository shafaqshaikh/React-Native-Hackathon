import {View, Text, ScrollView, Image} from 'react-native';
import React, {useContext} from 'react';
import Category from './Category';
import {UserContext} from '../Context/UserContext';

const CloseFriends = () => {
  const {users, setUsers, closeFriends, setCloseFriends, Others, setOthers} =
    useContext(UserContext);
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 10}}>
        Close Friends
      </Text>
      <View
        style={{
          backgroundColor: '#D3D3D3',
          padding: 20,
          borderRadius: 10,
          marginTop: 10,
        }}>
        {closeFriends.length !== 0 ? (
          <ScrollView horizontal={true}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {closeFriends.map((user, i) => (
                <Category
                  key={i}
                  name={user.name}
                  image={user.image}
                  description={user.description}
                />
              ))}
            </View>
          </ScrollView>
        ) : (
          <Text
            style={{
              display: 'flex',
              alignSelf: 'center',
              fontSize: 20,
              color: '#fff',
            }}>
            No Close Friends Available
          </Text>
        )}
      </View>
    </View>
  );
};

export default CloseFriends;
