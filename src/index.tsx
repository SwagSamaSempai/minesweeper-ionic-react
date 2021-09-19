import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import {register} from './serviceWorkerRegistration';

defineCustomElements(window).then();

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

register();
