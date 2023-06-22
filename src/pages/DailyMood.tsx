import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import {returnDownBack} from "ionicons/icons";
  import './css/DailyMood.css';
import axios from 'axios';
  
  const DailyMood: React.FC = () => {

    function submitMood(moodRating: string){
        console.log(moodRating);

        const moodReqBody = {
            "userID":localStorage.userID,
            "moodRating":moodRating
          }
      
          const api = axios.create({
            baseURL: `https://prod-15.westeurope.logic.azure.com:443`,
          });
      
          api.post("/workflows/88876ebf4ac14a60a2438eb5a25c639e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FJqIEzlgid8T5xMHI8X7PSNscQQJR8c5BigrqOIOnwE", moodReqBody)
          .then((res) => {
            if(res.status === 200){
              
              console.log("We did it!");
              
            }
            
          })
    }
  
    return (
      <IonPage id="home-page">
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            This is a test!
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>
        <IonContent>
            <div className="login">
                <IonImg src="assets/icon/mood5.png" className="image" onClick={() => submitMood("5")} />
                <IonImg src="assets/icon/mood4.png" className="image" onClick={() => submitMood("4")}/>
                <IonImg src="assets/icon/mood3.png" className="image" onClick={() => submitMood("3")}/>
                <IonImg src="assets/icon/mood2.png" className="image" onClick={() => submitMood("2")}/>
                <IonImg src="assets/icon/mood1.png" className="image" onClick={() => submitMood("1")} />
            </div>
        
        <IonFab horizontal="start" vertical="bottom">
            <IonFabButton routerLink="/hub">
                <IonIcon icon={returnDownBack}></IonIcon>
            </IonFabButton>
        </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  
  export default DailyMood;
  