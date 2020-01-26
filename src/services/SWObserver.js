import api from './api';

export default function (serviceWorkerRegistration) {
    const options = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('BCe_YjTaclzYaBLO1ZPpLhlZG8vR4lhMYRfHmxvzvXeCBa1T5ap6i0Oa6LElSHOZkpY1n7j2-xh3nVGcvghfpAI')
    };
    serviceWorkerRegistration.pushManager.subscribe(options)
        .then(handleSubscription);
    function handleSubscription(pushSubscription) {
        console.log('Handling subscription');
        const user = JSON.parse(localStorage.getItem('user_info'));
        const subscriptionObject = JSON.parse(JSON.stringify(pushSubscription));
        const body = {
            endpoint: subscriptionObject.endpoint,
            keys: {
                'p256dh': subscriptionObject.keys.p256dh,
                'auth': subscriptionObject.keys.auth
            },
            expirationTime: pushSubscription.expirationTime,
            user_id: user.id,
            user_token: user.token
        }
        api.post('/sw/subscriptions', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!(response.data.ok)) {
                return console.log('Error registering push subscription')
            } else {
                sessionStorage.setItem('swclient', JSON.stringify(response.data.swclient));
                return console.log('Subscription registered successfully');
            }
        }).catch(err => console.log('Error registering push subscription', err));
        return pushSubscription;
    }
}
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);

    const base64 = (base64String + padding)
        // eslint-disable-next-line
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}