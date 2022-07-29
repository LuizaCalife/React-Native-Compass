import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { humorItens } from '../../screens/CardMood/humor';
import { activities } from '../../screens/CardMood/actions';
import { months } from '../../screens/CardMood/mes';

export const HumorCard = ({ humor, date, description, actions, id }) => {
	const Navigation = useNavigation()
	const dateValue = new Date(date);
	return (
		<TouchableOpacity style={styles.Card} onPress={() => Navigation.navigate('ModalScreen')}>
			<View style={styles.viewTop}>
				<Image style={styles.emoji} source={humorItens[humor].image} />
				<View>
				<Text>{`${String(dateValue.getDate()).padStart(2, '0')} DE ${months[dateValue.getMonth()]}`}</Text>
					<View style={styles.humorContainer}>
						<Text style={[styles.textHumor, { color: humorItens[humor].color }]}>{humorItens[humor].name}</Text>
						<Text style={styles.time}>{`${String(dateValue.getHours()).padStart(2, '0')}:${String(dateValue.getMinutes()).padStart(2, '0')}`}</Text>
					</View>
				</View>
			</View>
			<View style={styles.viewBottom}>
				<View style={styles.actions}>
					{actions.map((item, index) => (
					<View key={index} style={styles.actionsItem}>
						<Icon
							name={activities[item.name].icon}
							color='black'
							size={20}
						/>
						<Text style={styles.textActions}>{activities[item.name].name}</Text>
						{actions.length - 1 !== index &&
                                <Text style={styles.ponto}>•</Text>
                            }
						
					</View>))}
				</View>
				<Text>{description.substring(0, 34) + "..."}</Text>
			</View>
		</TouchableOpacity>
	)
}