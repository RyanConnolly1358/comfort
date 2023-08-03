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
  } from '@ionic/react';
import { useState } from 'react';
import { EmailClient } from '@azure/communication-email';
import {returnDownBack} from "ionicons/icons";
import './css/EmailCarer.css';
  
  const EmailCarer: React.FC = () => {

    const [emailContent, setEmail] = useState("");

  async function sendEmail() {
        console.log(emailContent);
        console.log(localStorage.carerEmail);
        console.log(localStorage.username);

        const emailClient = new EmailClient("endpoint=https://comfort-cs.communication.azure.com/;accesskey=EphTq7kRcWR9f4ItaLdO+ObYxCDmq+hIfPE6jkjAE/xHQ/l0n1ZLVi1RUWW9gjXu1RQQ+ikXlYJPNKNJwgtYew==")

        try {
          const message = {
            senderAddress: "ComfortAlert@6eaa7b45-a9e8-4bc9-a639-3c4878630394.azurecomm.net",
            content: {
              subject: localStorage.username + " has sent you a message!",
              plainText: emailContent,
            },
            recipients: {
              to: [
                {
                  address: localStorage.carerEmail,
                  displayName: "Carer Name",
                },
              ],
            },
          };
      
        await emailClient.beginSend(message);
      
         
        } catch (e) {
          console.log(e);
        }
  }
  
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Email your carer!</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent>
          <div className='main'>
            <IonImg src="assets/icon/logo.png" className="logo" />
            <IonInput
            className='input'
            value={emailContent}
            onIonChange={(e: any) => setEmail(e.target.value)}
          />

          <div className='button'>
          <IonButton  className='button' title="speakButton"  onClick={() => setEmail(emailContent+"Hello ")} color="secondary">Hello</IonButton>
          <IonButton  className='button' title="speakButton"  onClick={() => setEmail(emailContent+"Bye ")} color="secondary">Bye</IonButton>
          <IonButton  className='button' title="speakButton"  onClick={() => setEmail(emailContent+"Help ")} color="secondary">Help</IonButton>
          </div>
          <div className='button'>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"Yes ")} color="secondary">Yes</IonButton>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"No ")} color="secondary">No</IonButton>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"Maybe ")} color="secondary">Maybe</IonButton>
          </div>
          <div className='button'>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"Water ")} color="secondary">Water</IonButton>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"Food ")} color="secondary">Food</IonButton>
          <IonButton  title="speakButton"  onClick={() => setEmail(emailContent+"Toilet ")} color="secondary">Toilet</IonButton>
          </div>
          <IonButton className="emailBtn" expand="block" title='sendEmailButton' onClick={sendEmail} color="tertiary">
            Send Email!
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
  
  export default EmailCarer;
  