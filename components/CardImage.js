import { View, Image, StyleSheet} from 'react-native'
import React from 'react'

const CardImage = ({ image }) => {
  return (
    <View style={styles.cardImage}>
      <Image
        source={{
            uri:image.src.large 
              ? image.src.large
              : "https://cadenaser.com/resizer/LOg8G6ZOUs27cnp7d5XWPwN0aWc=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/VUXJ4NGPPJIGVPKH37DJM5MCOI.jpg"
        }}
        style={{height: 180, width: 180}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '49.5%',
        margin: 4,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0,
        borderRadius: 5
    }
})

export default CardImage