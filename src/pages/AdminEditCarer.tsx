import {
  IonButton,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonInput,
    IonModal,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
import { returnDownBack } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
  
const AdminEditCarer: React.FC = () => {

    interface Carer {
        carerEmail: string;
        id: string;
    }
    
   const [carers, setCarer] = useState<Carer[]>([]);
   const [newCarer, setNewCarer] = useState('');
   const [selectedCarer, setSelectedCarer] = useState('');

   function deleteCarer(){
    console.log(selectedCarer);

     const carerDeleteReqBody = {
      "id":selectedCarer
  }

  const api = axios.create({
      baseURL: `https://prod-207.westeurope.logic.azure.com:443`,
  });

  try{
      api.post("/workflows/33b291aec67b4ce68fe1a7ba9ceda551/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=j5CTxmZa9qc4FSVLpnHq88DMQlF1SEtb02B1FxMzMZY", carerDeleteReqBody)
    .then((res) => {

      console.log("Carer Deleted")
      window.location.reload();

    })
  } catch(e){
      throw e;
  }

   }

   function createCarer(){

      const carerCreateReqBody = {
        "carerEmail":newCarer,
        "patientID":localStorage.patientID
    }

    const api = axios.create({
        baseURL: `https://prod-215.westeurope.logic.azure.com:443`,
    });
  
    try{
        api.post("/workflows/55617af0210b41f1a6062a73168d9cab/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zyq7_p7GIDrAE6jSUtWdsYx260CN4NuelMVa205nwms", carerCreateReqBody)
      .then((res) => {

        console.log("Carer Created")
        window.location.reload();

      })
    } catch(e){
        throw e;
    }

   }

    async function getCarers(){

        const carerReadReqBody = {
            "patientID":localStorage.patientID,
        }

        const api = axios.create({
            baseURL: `https://prod-225.westeurope.logic.azure.com:443`,
        });
      
        try{
            api.post("/workflows/77277e0910f14f83af1fa927761739b8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=K1XhV6eZ3iRxmZPkJ2Xpj6baLyK5r7CSm-9_LdBgzxo", carerReadReqBody)
          .then((res) => {
        
            console.log(res.data)

            setCarer(res.data);

            console.log(carers);

          })
        } catch(e){
            throw e;
        }
    }

    useEffect(()=>{
       getCarers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
      <IonPage id="home-page">
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            This is a test!
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
        <IonButton id="open-modal" expand="block">Add Carer</IonButton>
        <IonButton expand="block" onClick={deleteCarer} disabled={selectedCarer===''} >Delete Carer</IonButton>
        <IonModal trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
          <div>
            <IonInput placeholder="Carer Email" fill='outline' className="input" onIonChange={(e:any) => setNewCarer(e.target.value)}/>
            <IonButton onClick={createCarer}>Add!</IonButton>
          </div>
        </IonModal>
        <IonFab horizontal="start" vertical="bottom">
              <IonFabButton routerLink="/admin">
              <IonIcon icon={returnDownBack}></IonIcon>
          </IonFabButton>
          </IonFab>

        </IonContent>
      </IonPage>
      
    );
  };
  
  export default AdminEditCarer;
  