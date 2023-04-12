import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { useState } from "react";


const Login: React.FC = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const refresh = (e: CustomEvent) => {
      setTimeout(() => {
        e.detail.complete();
      }, 3000);
    };

    function login(){
      console.log(username, password)
    }

    return (
    <IonPage>

        

        <IonContent className="ion-padding">
            <IonInput placeholder="Username" onIonChange={(e:any) => setUsername(e.target.value)}/>
            <IonInput placeholder="Password"  onIonChange={(e:any) => setPassword(e.target.value)}/>
            <IonButton onClick={login}>Login</IonButton>
            <IonButton routerLink="/register" color="secondary">Register</IonButton>
        </IonContent>

    </IonPage>
    )
}

export default Login;