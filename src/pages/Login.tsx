import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { useState } from "react";


const Login: React.FC = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  function login(){
    console.log(username)
  }

    return (
    <IonPage>

        <IonContent className="ion-padding">
            <IonInput placeholder="Username" onIonChange={(e:any) => setUsername(e.target.value)}/>
            <IonInput placeholder="Password"  onIonChange={(e:any) => setPassword(e.target.value)}/>
            <IonButton>Login</IonButton>
            <IonButton routerLink="/register" color="secondary">Register</IonButton>
        </IonContent>

    </IonPage>
    )
}

export default Login;