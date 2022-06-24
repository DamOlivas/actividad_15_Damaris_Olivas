import React, { useEffect, useState } from 'react';
import {Text, FlatList, SafeAreaView, TouchableOpacity,  Image} from 'react-native';
import db from './../../src/firebase/config'; //CONECTARNOS A LA BD
import {ref, onValue, set} from "firebase/database"; //REF ES LA REFERENCIA A DONDE QUEREMOS TRABAJAR
//ON VALUE CAMBIOS EN TIEMPO REAL
//SET CAMBIA LOS DATOS QUE QUEREMOS TODO ESTO SE IMPORTA DE FIRE DATABASE

export default function HomeScreen({ navigation }) {

  const [listDevices, setlistDevices] = useState([]);  //ARREGLO LISTDEVICES 

  const  readData = () => {
    const dbRef = ref(db, 'devices');
    onValue(dbRef, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistDevices(records)
    })
  }


  useEffect(()=>{
    readData();
  }, [])

  return (
    <SafeAreaView>
      <FlatList
          data={listDevices}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity   onPress={ () => {
                      set(ref(db, 'devices/' + item.id), {
                          area: item.area,
                          status: !item.status,
                          pin : item.pin
                        });
                    }}>
                  <Image source={ 
                          item.status ?  require('../../img/imagen_on.png') 
                                  : require('../../img/imagen_off.png') } 
                        style={{ width: 60, height: 60}}
                    />
              </TouchableOpacity> 
            <Text>{item.area}  | { String(item.status) }</Text>
            </>
          )}
      />
    </SafeAreaView>
  );
}