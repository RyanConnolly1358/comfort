import {
    IonContent,
    IonHeader,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
//import { get } from 'http';
//import { useEffect, useState } from 'react';
  
const AdminEditCarer: React.FC = () => {

    
   // const [carer, setCarer] = useState('');
  

    // function carerUpdate(){
    //     console.log(carer);
    // }

    function getCarers():string[]{
        
        //var dataList:string[];
        var dataList = ['test'];

        const carerReadReqBody = {
            "patientID":"b7da67d2-ea0a-4e80-93e3-24a6a217679b",
        }

        const api = axios.create({
            baseURL: `https://prod-225.westeurope.logic.azure.com:443`,
        });
      
        try{
            api.post("/workflows/77277e0910f14f83af1fa927761739b8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=K1XhV6eZ3iRxmZPkJ2Xpj6baLyK5r7CSm-9_LdBgzxo", carerReadReqBody)
          .then((res) => {

            res.data.forEach((element: any) => {
                 dataList.push(element["carerEmail"])
            });

          })

          console.log(dataList);
          return dataList;

        } catch(e){
            throw e;
        }
        
    }

    // useEffect(()=>{

       

    // }, [])
  
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

        <IonSelect label="Select a carer!" labelPlacement="floating" fill="outline">
                {

                    getCarers().map((carer) => (
                        <IonSelectOption>{carer}</IonSelectOption>
                    ))
                }
        </IonSelect>
                
                
            
      {/* <IonButton onClick={carerUpdate}>
        Test
      </IonButton> */}

        </IonContent>
      </IonPage>
      
    );
  };
  
  export default AdminEditCarer;
  