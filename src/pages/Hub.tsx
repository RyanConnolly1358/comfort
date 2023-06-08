import {
    IonButton,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import {chevronForward, logOut, lockClosed} from "ionicons/icons";
  
  const Hub: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            This is a test!
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>

        <IonContent>
            <IonImg src="assets/icon/logo.png" className="logo" />
            <IonButton disabled={true} expand="block" size="large">Daily Mood Check</IonButton>
            <IonButton expand="block" size="large">Email Carer</IonButton>
            <IonButton expand="block" size="large">Text to Speech</IonButton>
            <IonButton expand="block" size="large" color="danger">Emergency Alert</IonButton>

            <IonFab >
              <IonFabButton>
                <IonIcon icon={chevronForward}></IonIcon>
              </IonFabButton>
              <IonFabList side="end">
                <IonFabButton>
                    <IonIcon icon={lockClosed}></IonIcon>  
                </IonFabButton>
                <IonFabButton routerLink="/login">
                    <IonIcon icon={logOut}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
                
        </IonContent>

      </IonPage>
    );
  };
  
  export default Hub;