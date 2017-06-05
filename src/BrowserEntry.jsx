// @flow

import { h, render } from 'preact';
import App from './components/App';

render(<App />, document.getElementById('app'));

// window.addEventListener('load', () => {
//   if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('/sw.js').then(
//       registration => {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       },
//       err => {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       }
//     );
//   }
// });
