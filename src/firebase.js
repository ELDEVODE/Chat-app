import firebase from 'firebase/app';

import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAWo_wZbqxDkfv2K72hAMApy9MpH_NyCps',
    authDomain: 'eldechat-3977b.firebaseapp.com',
    projectId: 'eldechat-3977b',
    storageBucket: 'eldechat-3977b.appspot.com',
    messagingSenderId: '372086162813',
    appId: '1:372086162813:web:a26d878fd642aa6a9b3814',
  })
  .auth();
