import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getImages} from '../api/pexels'
import ImageList from '../components/ImageList'

const HomeScreen = () => {

    const [photos, setPhotos] = useState([])

    const loadImages = async () =>  {
        const res = await getImages();
        setPhotos(res.data.photos);
    }

    useEffect(() => {
        loadImages()
    }, [])

  return (
    <View>
      <ImageList photos={photos}/>
    </View>
  )
}

export default HomeScreen