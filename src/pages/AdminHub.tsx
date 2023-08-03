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
  import './css/Hub.css'
  
  const AdminHub: React.FC = () => {
  
    return (
        <IonPage>
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            Comfort - Welcome admin!
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>

        <IonContent>
            <IonImg src="assets/icon/logo.png" className="hubLogo" />
            <IonButton className="hubButton" expand="block" size="large" routerLink="/viewMoodReport">Mood Report</IonButton>
            <IonButton className="hubButton" expand="block" size="large" routerLink="/editCarer">Edit Carers</IonButton>
            <IonButton className="hubButton" expand="block" size="large" routerLink='/updatePrimaryCarer'>Update Primary Carer</IonButton>
            <IonButton className="hubButton" expand="block" size="large" routerLink='/editEmergencyContacts'>Edit Emergency Contacts</IonButton>

            <IonFab horizontal="start" vertical="bottom">
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
  
  export default AdminHub;
  