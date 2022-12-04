import { TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardImage = ({ image }) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity 
    style={styles.cardImage}
    onPress={() => navigation.navigate('ImageScreen', {image})}
    >
      <Image
        source={{
            uri:image.src.large 
              ? image.src.large
              : "https://cadenaser.com/resizer/LOg8G6ZOUs27cnp7d5XWPwN0aWc=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/VUXJ4NGPPJIGVPKH37DJM5MCOI.jpg"
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '48%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5
    },
    image: {
        width: '100%',
        height: 180,
        borderWidth: 0,
        borderRadius: 5

    }
})

export default CardImage