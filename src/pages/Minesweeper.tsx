import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import Game from './game';

const Minesweeper: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Minesweeper</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Game grid_height={10}
                      grid_width={10}
                      mines={20}/>
            </IonContent>
        </IonPage>
    );
}

export default Minesweeper;
