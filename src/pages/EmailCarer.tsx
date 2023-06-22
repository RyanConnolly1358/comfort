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
  } from '@ionic/react';
import { useState } from 'react';
import { EmailClient } from '@azure/communication-email';
import {returnDownBack} from "ionicons/icons";
  
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
            <IonTitle>This is a test!</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent>
          <IonInput
            placeholder="Enter Text"
            onIonChange={(e: any) => setEmail(e.target.value)}
          />
          <IonButton onClick={sendEmail} color="primary">
            Send Email!
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
  
  export default EmailCarer;
  