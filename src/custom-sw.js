self.addEventListener('push', async (event) => {
    if (!self.Notification) return;
    if (self.Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return;
    }
    const data = event.data.json();
    console.log(data);
    const title = data.reason === 'BOOK_CREATED' ? 'Um novo livro foi enviado para análise!' : 'Notificação nova!';
    self.registration.showNotification(title, {
        icon: 'http://localhost:5000/icons/app-logo72.png',
        body: 'Clique para ser redirecionado para a página de análise.',
        badge: 'http://localhost:5000/icons/app-logo72.png',
        timestamp: Date.parse(data.created_at),
        actions: [{ action: 'Ir', title: 'Ir para a análise' }]
    });
});
self.addEventListener('notificationclick', event => {
    clients.openWindow('/adverts');
});

/**
 * {
  "//": "Visual Options",
  "body": "<String>",
  "icon": "<URL String>",
  "image": "<URL String>",
  "badge": "<URL String>",
  "vibrate": "<Array of Integers>",
  "sound": "<URL String>",
  "dir": "<String of 'auto' | 'ltr' | 'rtl'>",

  "//": "Behavioral Options",
  "tag": "<String>",
  "data": "<Anything>",
  "requireInteraction": "<boolean>",
  "renotify": "<Boolean>",
  "silent": "<Boolean>",

  "//": "Both visual & behavioral options",
  "actions": "<Array of Strings>",

  "//": "Information Option. No visual affect.",
  "timestamp": "<Long>"}
 */