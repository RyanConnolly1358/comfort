import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonLabel, IonPage, IonToolbar } from "@ionic/react";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();

  function login(){

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
        
        localStorage.username = res.data[0]["username"];
        localStorage.admin = res.data[0]["admin"];
        localStorage.userID = res.data[0]["id"];

        console.log(res.data[0]["admin"])

        if(res.data[0]["admin"] === 0){
          localStorage.carerEmail = res.data[0]["carerEmail"];
          history.push('/hub');
        }else if(res.data[0]["admin"] === 1){
          localStorage.patientID = res.data[0]["patientID"];
          history.push('/admin');
        }
        
        
      }
      
    })

  }

    return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <div className="login">
               <IonImg src="assets/icon/logo.png" className="logo" />
               <IonLabel color={'danger'} className="title">Comfort</IonLabel>
               <IonInput placeholder="Username" title="usernameInput" className="input" onIonChange={(e:any) => setUsername(e.target.value)}/>
               <IonInput placeholder="Password" type="password" title="passwordInput" className="input" onIonChange={(e:any) => setPassword(e.target.value)}/>
               <IonButton onClick={login} expand="block" title="loginButton" color="secondary">Login</IonButton>
               <IonButton routerLink="/register" expand="block" title="registerButton" color="danger">Register</IonButton>
            </div>
            
        </IonContent>

    </IonPage>
    )
}

export default Login;