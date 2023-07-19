import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Hub from './pages/Hub';
import TextToSpeech from './pages/TextToSpeech';
import EmailCarer from './pages/EmailCarer';
import DailyMood from './pages/DailyMood';
import AdminHub from './pages/AdminHub';
import AdminEditCarer from './pages/AdminEditCarer';
import AdminUpdatePrimaryCarer from './pages/AdminUpdatePrimaryCarer';
import AdminEditEmergencyContacts from './pages/AdminEditEmergencyContacts';
import DailyMoodReport from './pages/DailyMoodReport';

import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/speak">
           <TextToSpeech />
        </Route>
        <Route path="/message/:id">
           <ViewMessage />
        </Route>
        <Route path="/hub" exact={true}>
          <Hub />
        </Route>
        <Route path="/email" exact={true}>
          <EmailCarer />
        </Route>
        <Route path="/mood" exact={true}>
          <DailyMood />
        </Route>
        <Route path="/admin" exact={true}>
          <AdminHub />
        </Route>
        <Route path="/editCarer" exact={true}>
          <AdminEditCarer />
        </Route>
        <Route path="/updatePrimaryCarer" exact={true}>
          <AdminUpdatePrimaryCarer />
        </Route>
        <Route path="/editEmergencyContacts" exact={true}>
          <AdminEditEmergencyContacts />
        </Route>
        <Route path="/viewMoodReport" exact={true}>
          <DailyMoodReport/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
