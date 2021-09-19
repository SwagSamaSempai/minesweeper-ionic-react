import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {gameControllerOutline} from 'ionicons/icons';

const Options: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Options</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Grid Height:</IonLabel>
                        <IonInput id="grid-height" inputmode="numeric" max="20" min="2" type="number" value="10"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Grid Width:</IonLabel>
                        <IonInput id="grid-width" inputmode="numeric" max="20" min="2" type="number" value="10"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Mines:</IonLabel>
                        <IonInput id="mines" inputmode="numeric" max="100" min="1" type="number" value="20"/>
                    </IonItem>
                </IonList>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={() => console.log("cool!")}>
                        <IonIcon icon={gameControllerOutline}/>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
}

export default Options;
