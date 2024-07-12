# Flip card 
Flip Card was made to assist learners looking to memorize word pairs with the ability for these word to be from seperate languages.  

## Features

- Create a stack of flip cards
- Add cards to learn new words with a variety of languages using OpenAi to translate
- Test yourself with a simple game of memory over your stack
- Get a results page after each game
- Set reminders through out the day with push notifications which link the user back to the flip card tab

## Demo

Here is a Demo of the basic card operations including translations

![screen-capture (1)](https://github.com/user-attachments/assets/ea0a74a3-df26-442c-9328-03905a3d4053)

Here is a Demo of the push notifications using cron scheduling

![screen-capture (4)](https://github.com/user-attachments/assets/257567a9-09a0-4645-9518-e39d8f1a1ae7)


## Set up
1. **Clone the repository**:
   ```sh
   git clone https://github.com/mano-pihema/flip-card.git
   ```
2. **Change dir**:
   ```sh
   cd flip-card
   ```

3. **Create a .env file**:
   ```env
   OPEN_AI_KEY=YOUR OPENAI KEY
   VAPID_PUBLIC='95D9D6B5OCosqSHnLlTBUTsOQREvvmZgc_iicAXL06e39gRN9NcAwYcTjkMyI2P9S4AYCEDuFRZiNuS6gc'
   VAPID_PRIVATE='yspDmVEy_bFKDjNeXCaqpTFMQ7Dk26j4ABm99ApW7R4'
   ```
4. **Install dependencies**:
   ```sh
   npm install
   ```
5. **Run App**:
    ```sh
   npm run dev
   ```

## Learning Goals

I was mostly wanting to learn about intergrating chatGpt into a app. Making Api call for translations proved to be simpler then i thought so i decided to spend some time learning to integrate push notifications. The notifications use cron schedule to fire at custom intervals through out the day.   

## Tech
![mui](https://img.shields.io/badge/Mui-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![react](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![react-query](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![open-ai](https://img.shields.io/badge/Openai-412991?style=for-the-badge&logo=openai&logoColor=white)
![node-js](https://img.shields.io/badge/Nodejs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![knexdotjs](https://img.shields.io/badge/Knexjs-D26B38?style=for-the-badge&logo=knexdotjs&logoColor=white)
![sqlite](https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)




