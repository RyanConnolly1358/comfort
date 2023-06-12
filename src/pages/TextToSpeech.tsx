import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

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
      </IonContent>
    </IonPage>
  );
};

export default TextToSpeech;
