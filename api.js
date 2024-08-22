const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const API = '5ee8f368-677e-4ade-a29f-91b67857b22e';


async function Image_to_Image(prompt,model,image) {
    const form ={
    'image': fs.createReadStream(image)
    ,'model':model
    ,'prompt':prompt
    ,'usUD':true
    };
    // const form = {
    //        prompt: 'neon cat',
    //        model: 'DALL-E 3',
    //        style: 'string',
    //        artist: 'string',
    //        dimensions: 'string',
    //        useHD: true,
    //        image: 'string'
    //    };
    const url = 'https://easy-peasy.ai/api/generate-image'
    try {

        console.log("hey");
        const response = await axios.post(url, form, {
        headers:{
            'accept': 'application/json',
            "x-api-key":API,
            'Content-Type': 'application/json'
        }
    });

        console.log('Response',response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }

} 
module.exports = Image_to_Image;
