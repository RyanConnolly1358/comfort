import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import {returnDownBack} from "ionicons/icons";
import './css/TextToSpeech.css';

const TextToSpeech: React.FC = () => {
  const [textToBeConverted, setTextToBeConverted] = useState("");

  

  function convertTextToSpeech() {

    let utter = new SpeechSynthesisUtterance(textToBeConverted);
    speechSynthesis.speak(utter);

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle title="speakTitle">Speak!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main">
          <IonInput
          className="input"
          placeholder="Enter Text"
          onIonChange={(e: any) => setTextToBeConverted(e.target.value)}
          />
          <IonButton onClick={convertTextToSpeech} color="primary">
            Speak!
          </IonButton>
          
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

export default TextToSpeech;
