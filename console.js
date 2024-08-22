#! /usr/bin/env node
const Image_to_Image = require('./api.js');

async function main() {
    try {
        const r = await Image_to_Image('Iphone application','Dall-E 3','./walmart.jpg');
        console.log(r.message);
        }
    catch (e){
        console.log("error:",e.message);
    }
}
main();
// postRequest.js

//const axios = require('axios');
//
//async function generateImage() {
//    const url = 'https://easy-peasy.ai/api/generate-image';
//    const apiKey = '27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e'; // Replace with your API key
//
//    const requestData = {
//        prompt: 'neon cat',
//        model: 'DALL-E 3',
//        style: 'string',
//        artist: 'string',
//        dimensions: 'string',
//        useHD: true,
//        image: 'string'
//    };
//
//    try {
//        const response = await axios.post(url, requestData, {
//            headers: {
//                'accept': 'application/json',
//                'x-api-key': apiKey,
//                'Content-Type': 'application/json'
//            }
//        });
//
//        console.log('Response:', response.data);
//    } catch (error) {
//        console.error('Error:', error.response ? error.response.data : error.message);
//    }
//}
//
//// Call the function
//generateImage();
