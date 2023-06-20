import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import { useState } from 'react';
import { EmailClient } from '@azure/communication-email';
  
  const EmailCarer: React.FC = () => {

    const [emailContent, setEmail] = useState("");

  

  async function sendEmail() {
        console.log(emailContent);

        const emailClient = new EmailClient("endpoint=https://comfort-cs.communication.azure.com/;accesskey=EphTq7kRcWR9f4ItaLdO+ObYxCDmq+hIfPE6jkjAE/xHQ/l0n1ZLVi1RUWW9gjXu1RQQ+ikXlYJPNKNJwgtYew==")

        try {
          const message = {
            senderAddress: "ComfortAlert@6eaa7b45-a9e8-4bc9-a639-3c4878630394.azurecomm.net",
            content: {
              subject: "Ryan has sent you a message!",
              plainText: emailContent,
            },
            recipients: {
              to: [
                {
                  address: "ryanconnolly1358@hotmail.co.uk",
                  displayName: "Patient Name",
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
        </IonContent>
      </IonPage>
    );
  };
  
  export default EmailCarer;
  