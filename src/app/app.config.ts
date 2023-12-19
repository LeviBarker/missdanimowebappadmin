import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId": "miss-dani-mo",
      "appId": "1:581117400103:web:363487bc665b669f0c2a02",
      "storageBucket": "miss-dani-mo.appspot.com",
      "apiKey": "AIzaSyDX8ocYAgVuli2yyTlRgPvKTktYxbAYPXg",
      "authDomain": "miss-dani-mo.firebaseapp.com",
      "messagingSenderId": "581117400103",
      "measurementId": "G-209XEQ131F"
    }))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideAnimations()]
};
