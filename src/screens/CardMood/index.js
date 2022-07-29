import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { HumorCard } from '../../components/cardHumors';
import style from './styles';
import api from '../../services/api';
import AddMood from '../AddMood';

const Add = () => {
   const [arrayCards, setArrayCards] = useState([]);
   const [loading, setLoading] = useState(false);

   const getCards = async () => {
      try {
         await api.get('/daily_entries')
            .then(res => {
               setArrayCards(res.data);
               setLoading(true);
            })
      } catch (error) {
         console.log(error)
      }
   }
     
   useEffect(() => {
      getCards();
   }, [arrayCards])

   return (
      <>
      {loading &&
      <FlatList
         contentContainerStyle={{ paddingBottom: 25 }}
         data={arrayCards}
         ListEmptyComponent={AddMood}
         keyExtractor={item => item.id}
         renderItem={({ item }) =>
            <View style={style.body}>
               <HumorCard
                  id={item.id}
                  humor={item.mood}
                  date={item.created_at}
                  description={item.short_description}
                  actions={item.activities}
               />
            </View>
         }
      />
      }
      </>
   )
}
export default Add













