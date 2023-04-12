import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage id="home-page">
      <IonHeader>

      <IonToolbar>
        <IonTitle>
          This is a test!
        </IonTitle>
      </IonToolbar>

      </IonHeader>
    </IonPage>
  );
};

export default Home;
