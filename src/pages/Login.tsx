import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();

  function login(){
    console.log(username, password)

    const loginReqBody = {
      "username":username,
      "password":password
    }

    const api = axios.create({
      baseURL: `https://prod-16.ukwest.logic.azure.com:443`,
    });

    api.post("/workflows/c2d9608d2cee4157a92de75ad70733ec/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7AoQpjXHRewmc0u4P2C0N-HBsUuDNJzYYsYel9lhuAY", loginReqBody)
    .then((res) => {
      if(res.status === 200){
        history.push('/register');
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
            <div className="login">
               <IonImg src="assets/icon/logo.png" className="logo" />
               <IonLabel color={'danger'} className="title">Comfort</IonLabel>
               <IonInput placeholder="Username" className="input" onIonChange={(e:any) => setUsername(e.target.value)}/>
               <IonInput placeholder="Password"  className="input" onIonChange={(e:any) => setPassword(e.target.value)}/>
               <IonButton onClick={login} color="primary" className="loginBtn">Login</IonButton>
               <IonButton routerLink="/register" color="secondary" className="loginBtn">Register</IonButton>
            </div>
            
        </IonContent>

    </IonPage>
    )
}

export default Login;