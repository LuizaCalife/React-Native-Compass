import React from 'react';
import { View, FlatList } from 'react-native';
import { HumorCard } from '../../components/cardHumors';
import style from './styles';
import DATA from './lista';
import AddMood from '../AddMood';

const Add = () => {
   return (
      <FlatList
         contentContainerStyle={{ paddingBottom: 25 }}
         data={DATA}
         ListEmptyComponent={AddMood}
         keyExtractor={item => item.id}
         renderItem={({ item }) =>
            <View style={style.body}>
               <HumorCard
                  status={item.status}
                  time={item.time}
                  data={item.data}
                  actions={item.actions}
                  description={item.description}
                  image={item.image}
               />
            </View>
         }
      />
   )
}
export default Add













