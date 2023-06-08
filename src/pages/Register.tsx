import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {returnDownBack} from "ionicons/icons";
import './Register.css';

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
            <div className="register">
                <IonLabel>Enter your details below!</IonLabel>
                
                <IonInput labelPlacement="stacked" label="Enter Username:" placeholder="Patrick123" onIonChange={(e:any) => setUsername(e.target.value)}/>
                <IonInput labelPlacement="stacked" label="Enter Email:" placeholder="patrick@gmail.com" onIonChange={(e:any) => setEmail(e.target.value)}/>
                <IonInput labelPlacement="stacked" label="Enter Password:" type="password" value="password" onIonChange={(e:any) => setPassword(e.target.value)}/>
                <IonInput labelPlacement="stacked" label="Confirm Password:" type="password" value="password" onIonChange={(e:any) => setConfirmP(e.target.value)}/>

                <IonButton onClick={register} color={"secondary"} expand="block">Register!</IonButton>
               </div>

            
                  <IonFab horizontal="start" vertical="bottom">
                    <IonFabButton routerLink="/login">
                        <IonIcon icon={returnDownBack}></IonIcon>
                    </IonFabButton>
                </IonFab>
            
        </IonContent>

    </IonPage>
    )
}

export default Register;