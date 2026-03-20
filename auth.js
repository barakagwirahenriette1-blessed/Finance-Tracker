const actionCodeSettings = {
  url: 'https://www.example.com/?email=user@example.com',
  iOS: {
     bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  handleCodeInApp: true
};
await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
// Obtain emailLink from the user.
if(isSignInWithEmailLink(auth, emailLink)) {
  await signInWithEmailLink(auth, 'user@example.com', emailLink);
}
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
