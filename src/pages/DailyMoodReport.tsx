import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'; 
import './css/DailyMoodReport.css';
import { returnDownBack } from 'ionicons/icons';

  
  const DailyMoodReport: React.FC = () => {

    Chart.register(CategoryScale)

    const options = {
      maintainAspectRatio: false, 
      responsive: true,
      x: {
        type: 'timeseries'
      }
      
    }

    let [pastMoods, setPastMoods] = useState('');
    let test = new Date();

    const lineChartData = {
        labels:[test.getDate()-6,test.getDate()-5,test.getDate()-4,test.getDate()-3,test.getDate()-2,test.getDate()-1,test.getDate(),test.getDate()],
        datasets: [
            {
              label: 'Mood Rating',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 2,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              showLine: true,
              data: [pastMoods[12],pastMoods[10],pastMoods[8],pastMoods[6],pastMoods[4],pastMoods[2],pastMoods[0]]
              //data: ["1","3","2","1","0",pastMoods[2],pastMoods[0]]
              //data: [pastMoods.split(",")]
            }
          ]
    }

    function getMoodReport(){
        const moodReqBody = {
            "patientID":localStorage.patientID,
        }
    
        //https://prod-190.westeurope.logic.azure.com:443/workflows/8f22d63df67040699c688b522ab107d6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4BYtDJmcMHLvy5KhTFmvXTzjatVP2y3dXN4crbsC_QU

        const api = axios.create({
            baseURL: `https://prod-190.westeurope.logic.azure.com:443`,
        });
    
        try{
            api.post("/workflows/8f22d63df67040699c688b522ab107d6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4BYtDJmcMHLvy5KhTFmvXTzjatVP2y3dXN4crbsC_QU", moodReqBody)
          .then((res) => {

            var pastMoods = [0,0,0,0,0,0,0]

            // eslint-disable-next-line array-callback-return
            res.data.map( (test: { [x: string]: any; }) => {

                //Past 7 Days
                let past7Days = [];
                for (let i = 0; i < 7; i++) {
                  past7Days.push(getDate(i))
                }
                
                const date: Date = new Date(test["_ts"] * 1000);
                let t = date.toLocaleDateString();
                console.log(t);

                switch(t){
                    case past7Days[0].toLocaleDateString(): { pastMoods[0] = test["moodRating"]; break;}
                    case past7Days[1].toLocaleDateString(): { pastMoods[1] = test["moodRating"]; break;}
                    case past7Days[2].toLocaleDateString(): { pastMoods[2] = test["moodRating"]; break;}
                    case past7Days[3].toLocaleDateString(): { pastMoods[3] = test["moodRating"]; break;}
                    case past7Days[4].toLocaleDateString(): { pastMoods[4] = test["moodRating"]; break;}
                    case past7Days[5].toLocaleDateString(): { pastMoods[5] = test["moodRating"]; break;}
                    case past7Days[6].toLocaleDateString(): { pastMoods[6] = test["moodRating"]; break;}

                }
            }
                
            )
            
            //console.log(pastMoods.toString());
            setPastMoods(pastMoods.toString());
            
            
          })
        } catch(e){
            throw e;
        }
    }

    function getDate(days: number): Date{


      let date = new Date()
      date.setDate(test.getDate()-days);

      return date;
    }

    useEffect(()=>{

        getMoodReport();
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
  
    return (
      <IonPage id="home-page">
        <IonHeader>
  
        <IonToolbar>
          <IonTitle>
            Mood Report 
          </IonTitle>
        </IonToolbar>
  
        </IonHeader>
        <IonContent className='ion-padding'>
          <div className='main'>
          
            <IonList max-height = "500px">
            
            <IonItem>
              
                <Line className='min'  data={lineChartData}
                    options={options}   />
              
              
            </IonItem>
           
          </IonList>
          <IonLabel className='text'>Past 7 day mood ratings:<br/></IonLabel>
          {
              pastMoods.split(',', 7).map((test, index) => <IonLabel className='text'> {getDate(index).toLocaleDateString()}: {test}<br/></IonLabel> )
              
          }

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
  
  export default DailyMoodReport;
  