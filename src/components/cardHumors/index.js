import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HumorColors = {
	BEM: '#E24B4B',
	MAL: '#4B75E2',
	TRISTE: '#4BE263',
	RADIANTE: '#FFD700',
}
export const HumorCard = ({ image, data, status, time, description, actions }) => {
	const Navigation = useNavigation()
	return (
		<TouchableOpacity style={styles.Card} onPress={() => Navigation.navigate('ModalScreen')}>
			<View style={styles.viewTop}>
				<Image style={styles.emoji} source={image} />
				<View>
					<Text>{data}</Text>
					<View style={styles.humorContainer}>
						<Text style={[styles.textHumor, { color: HumorColors[status] }]}>{status}</Text>
						<Text style={styles.time}>{time}</Text>
					</View>
				</View>
			</View>
			<View style={styles.viewBottom}>
				<View style={styles.actions}>
					<View style={styles.actionsItem}>
						<Icon
							name={actions[0]}
							color='black'
							size={20}
						/>
						<Text style={styles.textActions}>festa</Text>
						<Text style={styles.ponto}>•</Text>
					</View>
					<View style={styles.actionsItem}>
						<Icon
							name={actions[1]}
							color='black'
							size={20}
						/>
						<Text style={styles.textActions}>esportes</Text>
						<Text style={styles.ponto}>•</Text>
					</View>
					<View style={styles.actionsItem}>
						<Icon
							name={actions[2]}
							color='black'
							size={20}
						/>
						<Text style={styles.textActions}>cozinhar</Text>
					</View>
				</View>
				<Text>{description.substring(0, 34) + "..."}</Text>
			</View>
		</TouchableOpacity>
	)
}