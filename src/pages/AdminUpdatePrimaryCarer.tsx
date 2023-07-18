import {
  IonButton,
  IonContent,
    IonHeader,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
  import { useEffect, useState } from 'react';
  
  const AdminUpdatePrimaryCarer: React.FC = () => {

    interface Carer {
      carerEmail: string;
      id: string;
    }
  
    const [carers, setCarer] = useState<Carer[]>([]);
    const [selectedCarer, setSelectedCarer] = useState('');
    const [currentCarer, setCurrentCarer] = useState<Carer[]>([]);


    function updatePrimaryCarer(){
      const updatePrimaryCarerReq = {
        "oldCarer":currentCarer[0]["id"],
        "newCarer":selectedCarer,
    }
    const api = axios.create({
      baseURL: `https://prod-214.westeurope.logic.azure.com:443`,
    });

    try{
      api.post("/workflows/3213d82bd6b542ed962c512107dda043/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dfwhdAE2t6-jpmQ9uIrcDsn8G8Wmie2mrmjV8ONGcG0", updatePrimaryCarerReq)
    .then((res) => {

      window.location.reload();

    })
    } catch(e){
      throw e;
    }

    }

    function getPrimaryCarer(){
          const primaryCarerReadReqBody = {
            "patientID":localStorage.patientID,
        }
  
        const api = axios.create({
            baseURL: `https://prod-85.westeurope.logic.azure.com:443`,
        });
  
        try{
            api.post("/workflows/c79d4b68ee28462e9056b94ce5048e5d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LoGrZbOapzHDXFh_bKTI6Zvw6ATdS_Q2l2rz0N60ZmI", primaryCarerReadReqBody)
          .then((res) => {
  

            console.log("Resp returned");
            return res;
            
  
          }).then((res) => {
            setCurrentCarer(res.data);
          })
        } catch(e){
            throw e;
        }
    }

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
 

    useEffect(()=>{

      getPrimaryCarer();
      getCarers();

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  
    return (
      <IonPage id="home-page">
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>
        <IonContent>
        
        <IonSelect label="Select a carer!" labelPlacement="floating" fill="outline" onIonChange={e=>setSelectedCarer(e.target.value)}>
                {
                    carers.map(carer =>
                        <IonSelectOption value={carer["id"]}>{carer["carerEmail"]}</IonSelectOption>
                    )
                }
        </IonSelect>
        <IonButton expand="block" onClick={updatePrimaryCarer}>Update Primary Carer</IonButton>

          {/* <IonLabel>Current Primary : {currentCarer[0]["carerEmail"]}</IonLabel> */}
        </IonContent>
      </IonPage>
      
    );
  };
  
  export default AdminUpdatePrimaryCarer;
  