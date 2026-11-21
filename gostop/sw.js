// 할머니의 고스톱: 알림 표시용 서비스 워커 (캐시는 하지 않음)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{ e.notification.close(); e.waitUntil(self.clients.matchAll({type:'window'}).then(cs=>{ for(const c of cs){ if('focus' in c)return c.focus(); } return self.clients.openWindow('./'); })); });
