import axios from "axios";

export const getImages = async(searchTerm = 'programming') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: '563492ad6f91700001000001e0d0d6816d26474dbcb7254a646804e2'
        }
    });