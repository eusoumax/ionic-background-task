Projeto Ionic que permite controlar/rodar um processo em segundo plano e também armazena atributo para o 
aplicativo e recuperar sempre que ele é ligado/finalizado localstorage.


#####################
background mode
ionic cordova plugin add cordova-plugin-background-mode
npm install @ionic-native/background-mode




PS D:\dev\vscode-workspace\ionic-task-background> adb devices
List of devices attached
* daemon not running; starting now at tcp:5037
* daemon started successfully
0027401012      device

ionic cordova run --platform android --target=0027401012   


#adicionar o no config.xml

<preference name="android-minSdkVersion" value="19" />
<engine name="android" spec="8.0.0" />



#Estilos grid ionic
https://ionicframework.com/docs/v3/dist/preview-app/www/?production=true#/grid-basic