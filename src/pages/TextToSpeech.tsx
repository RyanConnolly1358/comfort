import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import {returnDownBack} from "ionicons/icons";
import './css/TextToSpeech.css';
import './css/global.css';

const TextToSpeech: React.FC = () => {
  const [textToBeConverted, setTextToBeConverted] = useState("");
  
  

  function convertTextToSpeech() {

    let utterText = new SpeechSynthesisUtterance(textToBeConverted);
    speechSynthesis.speak(utterText);

  }

  function buttonToSpeech(speechValue: string){

    let utterButton = new SpeechSynthesisUtterance(speechValue);
    speechSynthesis.speak(utterButton);
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
          <IonImg src="assets/icon/logo.png" className="logo" />
          <IonInput
          className="input"
          placeholder="Enter Text"
          onIonChange={(e: any) => setTextToBeConverted(e.target.value)}
          />

          <div>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Hello")} color="secondary">Hello</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Bye")} color="secondary">Bye</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Help")} color="secondary">Help</IonButton>
          </div>
          <div>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Yes")} color="secondary">Yes</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("No")} color="secondary">No</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Maybe")} color="secondary">Maybe</IonButton>
          </div>
          <div>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Water")} color="secondary">Water</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Food")} color="secondary">Food</IonButton>
          <IonButton  title="speakButton"  onClick={() => buttonToSpeech("Toilet")} color="secondary">Toliet</IonButton>
          </div>
          

          <IonButton  title="speakButton" expand="block" onClick={convertTextToSpeech} color="tertiary">
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
