self.addEventListener('push', async (event) => {
    if (!self.Notification) return;
    if (self.Notification.permission !== 'granted') {
        const permission = await self.Notification.requestPermission();
        if (permission !== 'granted') return;
    }
    const data = event.data.json();

    const title =
        data.reason === 'BOOK_CREATED'
            ? 'Um novo livro foi enviado para análise!'
            : 'Notificação nova!';

    self.registration.showNotification(title, {
        icon: `${window.location.origin}/icons/app-logo72.png`,
        body: 'Clique para ser redirecionado para a página de análise.',
        badge: `${window.location.origin}/icons/app-logo72.png`,
        timestamp: Date.parse(data.created_at),
        actions: [{ action: 'Ir', title: 'Ir para a análise' }],
    });
});

self.addEventListener('notificationclick', (event) => {
    clients.openWindow('/adverts');
});
