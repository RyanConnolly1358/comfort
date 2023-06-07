import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmP, setConfirmP] = useState('')
    const [email, setEmail] = useState('')

    let history = useHistory();

    function register(){
        console.log(username,password,confirmP,email)

        const registerReqBody = {
            "username":username,
            "password":password,
            "email":email
          }
      

        const api = axios.create({
            baseURL: `https://prod-71.westeurope.logic.azure.com:443`,
          });
      
          api.post("/workflows/45fc0431d8844804aaa174b1a55bf124/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fVJ6yCkZAZi3BzEaoe21kuGYAeX61i956iLTXhiEpPI", registerReqBody)
          .then((res) => {
            if(res.status === 200){
              history.push('/login');
              console.log("We did it!")
            }
            
          })
      
    }

    return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Comfort!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <div>
                <IonLabel>Enter your details below!</IonLabel>
                
                <IonInput placeholder="Username" onIonChange={(e:any) => setUsername(e.target.value)}/>
                <IonInput placeholder="Email" onIonChange={(e:any) => setEmail(e.target.value)}/>
                <IonInput placeholder="Password" onIonChange={(e:any) => setPassword(e.target.value)}/>
                <IonInput placeholder="Confirm Password" onIonChange={(e:any) => setConfirmP(e.target.value)}/>

                <IonLabel>**You admin account details will be emailed to you upon creation</IonLabel>
                <IonButton onClick={register}>Register!</IonButton>
            </div>
            
        </IonContent>

    </IonPage>
    )
}

export default Register;