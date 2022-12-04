import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getImages} from '../api/pexels'
import ImageList from '../components/ImageList'
import { Input, Button } from '@rneui/base'

const HomeScreen = ({openSearch}) => {

    const [photos, setPhotos] = useState([])

    const loadImages = async () =>  {
        const res = await getImages();
        setPhotos(res.data.photos);
    }

    useEffect(() => {
        loadImages()
    }, [])

  return (
    <>
        {openSearch && (
            <View style={styles.searchSection}>
                <Input 
                    leftIcon={{type: 'feather', name: 'search', color: '#fff'}}
                    placeholder='Search a term'
                    style={styles.input}
                    inputContainerStyle={styles.searchInput}
                    leftIconContainerStyle={styles.searchLeftIcon}
                />
                <Button 
                    title="Search" 
                    buttonStyle={styles.buttonSearch}
                    />
            </View>
        )}
        <View style={styles.container}>
            <Text style={styles.totalResultsText}>1000 results</Text>
            <ImageList photos={photos}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    totalResultsText: {
        color: '#d0d0d0',
        textAlign: 'right',
        width: '100%',
        paddingTop: 35
    },
    searchInput: {
        backgroundColor: '#2c292c',
        borderBottomWidth: 0,
        paddingHorizontal: 4,
        color: '#fff'
    },
    searchSection: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        color: '#fff'
    },
    searchLeftIcon: {
        paddingStart: 10,
        marginRight: 7
    },
    buttonSearch: {
        backgroundColor: '#229783',
        marginBottom: 27
    }
})

export default HomeScreen