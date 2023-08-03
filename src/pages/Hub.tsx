import {
    IonButton,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
  import {chevronForward, logOut, lockClosed} from "ionicons/icons";
  
  const Hub: React.FC = () => {

    async function sendEmergencyAlert() {

      const loginReqBody = {
        "userID":localStorage.userID,
      }
  
      const api = axios.create({
        baseURL: `https://prod-161.westeurope.logic.azure.com:443`,
      });
      api.post("/workflows/a015a82b71c747ed8d13d90cb5db36df/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QKTtDbSAsoGgKQvJylX1uwn2MqEhzYsYbNSbUphNxUA", loginReqBody)
      .then((res) => {
        if(res.status === 200){
          console.log("Emergency Alert worked")
          

      }
    })
  }

    return (
      <IonPage>
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            Comfort - Welcome user!
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>

        <IonContent>
            <IonImg src="assets/icon/logo.png" className="logo" />
            <IonButton expand="block" size="large" title='dailyMoodButton' routerLink="/mood">Daily Mood Check</IonButton>
            <IonButton expand="block" size="large" title="emailCarerButton" routerLink="/email">Email Carer</IonButton>
            <IonButton expand="block" size="large" title="textToSpeechButton" routerLink='/speak'>Text to Speech</IonButton>
            <IonButton expand="block" size="large" title="emergencyAlertButton" color="danger" onClick={sendEmergencyAlert} >Emergency Alert</IonButton>

            <IonFab horizontal="start" vertical="bottom">
              <IonFabButton>
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
              <IonFabList side="end">
                <IonFabButton>
                    <IonIcon icon={lockClosed}></IonIcon>  
                </IonFabButton>
                <IonFabButton routerLink="/login">
                    <IonIcon icon={logOut}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
                
        </IonContent>

      </IonPage>
    );
  };


  export default Hub;