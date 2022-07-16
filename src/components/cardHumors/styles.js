import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   Card: {
      width: '88%',
      height: 158,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      borderRadius: 12,
      marginTop: 25,
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25,
   },
   emoji: {
      width: 50,
      height: 50,
      marginRight: 16
   },
   body: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f1f1f1'
   },
   viewTop: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingTop: 10
   },
   humorContainer: {
      flexDirection: 'row',
      alignItems: 'baseline'
   },
   viewBottom: {
      flex: 1,
      justifyContent: 'space-evenly',
      paddingBottom: 10
   },
   time: {
      marginLeft: 7,
      fontSize: 12
   },
   actions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 10
   },
   actionsItem: {
      alignItems: 'center',
      flexDirection: 'row',
   },
   ponto: {
      fontSize: 20,
      marginLeft: 5,
      marginRight: 5,
      color: 'black'
   },
   textActions: {
      fontSize: 13,
      marginLeft: 8,
      fontWeight: 'bold',
      color: 'black'
   },
   textHumor: {
      fontWeight: 'bold',
      fontSize: 18,
   }

}
)
export default styles