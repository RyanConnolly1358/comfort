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
          <IonTitle>This is a test!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonInput
          placeholder="Enter Text"
          onIonChange={(e: any) => setTextToBeConverted(e.target.value)}
        />
        <IonButton onClick={convertTextToSpeech} color="primary">
          Speak!
        </IonButton>
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
