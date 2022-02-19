import {View, Text, ScrollView, Image, Alert} from 'react-native';
import React, {useContext} from 'react';
import Category from './Category';
import {UserContext} from '../Context/UserContext';
import GestureRecognizer from 'react-native-swipe-gestures';

const Users = () => {
  const {users, setUsers, closeFriends, setCloseFriends, Others, setOthers} =
    useContext(UserContext);

  const AddtoCloseFriends = item => {
    setCloseFriends(prevItem => [item, ...prevItem]);
    let tempUsers = [...users];
    const newUsers = tempUsers.filter(user => user.name !== item.name);
    setUsers(newUsers);
    Alert.alert(`${item.name} is Added to your Close Friends`);
  };

  const AddtoOthers = item => {
    setOthers(prevItem => [item, ...prevItem]);
    let tempUsers = [...users];
    const newUsers = tempUsers.filter(user => user.name !== item.name);
    setUsers(newUsers);
    Alert.alert(`${item.name} is Added to Others`);
  };

  return (
    <View style={{marginTop: 70}}>
      {users.length !== 0 ? (
        <ScrollView horizontal={true}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {users.map((user, i) => (
              <GestureRecognizer
                key={i}
                onSwipeUp={() => AddtoCloseFriends(user)}
                onSwipeDown={() => AddtoOthers(user)}>
                <Category
                  name={user.name}
                  image={user.image}
                  description={user.description}
                />
              </GestureRecognizer>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text
          style={{
            display: 'flex',
            alignSelf: 'center',
            fontSize: 20,
            color: 'gray',
            marginTop: 10,
          }}></Text>
      )}
    </View>
  );
};

export default Users;
