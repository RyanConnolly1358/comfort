import {
  IonButton,
  IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
import { returnDownBack } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import './css/global.css';
  
  const AdminEditEmergencyContacts: React.FC = () => {

    interface Carer {
      carerEmail: string;
      id: string;
    }

    interface EmergencyContact {
      email: string;
    }

    const [carers, setCarer] = useState<Carer[]>([]);
    const [emergencyContacts, setCurrentEmergencyContacts] = useState<EmergencyContact[]>([{'email':""}]);
    const [selectedCarer, setSelectedCarer] = useState('');

    function getCarers(){
      const carerReadReqBody = {
        "patientID":localStorage.patientID,
    }

    const api = axios.create({
        baseURL: `https://prod-225.westeurope.logic.azure.com:443`,
    });

    try{
        api.post("/workflows/77277e0910f14f83af1fa927761739b8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=K1XhV6eZ3iRxmZPkJ2Xpj6baLyK5r7CSm-9_LdBgzxo", carerReadReqBody)
      .then((res) => {

        setCarer(res.data);

      })
    } catch(e){
        throw e;
    }
  }

  function getEmergencyContacts(){
    const carerReadReqBody = {
      "patientID":localStorage.patientID,
  }

  const api = axios.create({
      baseURL: `https://prod-40.westeurope.logic.azure.com:443`,
  });

  try{
      api.post("/workflows/c7702142b0fd4cf6a6a4c9c0013acfb8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VXQVo_DiBZiLgDk47JqG2IB6EfmFQMoEYkS9u2dNm40", carerReadReqBody)
    .then((res) => {

      setCurrentEmergencyContacts(res.data);

    })
  } catch(e){
      throw e;
  }
}

  function addEmergencyContact(){

    const newECReqBody = {
      "email":selectedCarer,
      "patientID":localStorage.patientID
    }

    const api = axios.create({
        baseURL: `https://prod-194.westeurope.logic.azure.com:443`,
    });

    try{
        api.post("/workflows/2f447ae8e2a444f199697e337cb55e4e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0iPnDsuOfpGqhu9AmLmnXiUWq2pFefC4wqgA00C3Qkc", newECReqBody)
      .then((res) => {
        console.log("Emergency Contacts Updated")
        window.location.reload();

      })
    } catch(e){
        throw e;
    }

  }

  function removeEmergencyContact(){

    const removeECReqBody = {
      "email":selectedCarer,
    }
    
    const api = axios.create({
        baseURL: `https://prod-203.westeurope.logic.azure.com:443`,
    });

    try{
        api.post("/workflows/d563d38ba48144a382612c6e9013dfb6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oOrkrYk0uoPKr6pTAm1UL18Fr4Gnn4IHIZSHuRQOKtw", removeECReqBody)
      .then((res) => {
        console.log("Emergency Contact deleted")

        window.location.reload();

      })
    } catch(e){
        throw e;
    }

  }

  useEffect(()=>{

    getCarers();
    getEmergencyContacts();

 }, [])
  
    return (
      <IonPage id="home-page">
        <IonHeader>
  
          <IonToolbar>
            <IonTitle>
              Edit Emergency Contacts
            </IonTitle>
          </IonToolbar>

        </IonHeader>
        <IonContent className="ion-padding"> 

        <div className='main'>
          <div className='input'>
            <IonSelect label="Select a carer!" labelPlacement="floating" fill="outline" onIonChange={e=>setSelectedCarer(e.target.value)}>
                 {
                  //List Current Carers
                     carers.map(carer =>
                         <IonSelectOption value={carer["carerEmail"]}>{carer["carerEmail"]}</IonSelectOption>
                     )
                 }
            </IonSelect>
          </div>
        
          <IonButton expand="block" color={"secondary"} onClick={addEmergencyContact} >Add Carer to EC</IonButton>
          <IonButton expand="block" color={"danger"} onClick={removeEmergencyContact} >Remove EC</IonButton>
          <IonLabel className='text'>Emergency Contacts: </IonLabel>
                 {emergencyContacts.map( emergencyContact =>
                    <IonLabel className='text'>{emergencyContact["email"]+" "}</IonLabel>
                 )}
        </div>
          
           

           <IonFab horizontal="start" vertical="bottom">
              <IonFabButton routerLink="/admin">
              <IonIcon icon={returnDownBack}></IonIcon>
          </IonFabButton>
          </IonFab>
         </IonContent>
      </IonPage>
    );
  };
  
  export default AdminEditEmergencyContacts;
  