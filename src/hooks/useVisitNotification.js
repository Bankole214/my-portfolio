import { useEffect } from 'react';
import { sendTelegramMessage } from '../utils/telegramUtils';

/**
 * Custom hook to send a Telegram notification when a user visits the portfolio.
 * Uses sessionStorage to ensure the notification is only sent once per session.
 */
const useVisitNotification = () => {
  useEffect(() => {
    const hasNotified = sessionStorage.getItem('visit_notified');

    if (!hasNotified) {
      const fetchLocationAndNotify = async () => {
        let locationData = {};
        try {
          const response = await fetch('https://ipapi.co/json/');
          locationData = await response.json();
        } catch (error) {
          console.error('Failed to fetch location data:', error);
        }

        const pageTitle = document.title || 'Portfolio';
        const userAgent = navigator.userAgent;
        const screenResolution = `${window.screen.width}x${window.screen.height}`;
        const referrer = document.referrer || 'Direct Visit';
        const timestamp = new Date().toLocaleString();

        const message = `
<b>🚀 New Portfolio Visit!</b>
<b>Time:</b> ${timestamp}
<b>Page:</b> ${pageTitle}

<b>📍 Location:</b> ${locationData.city || 'Unknown'}, ${locationData.region || 'Unknown'}, ${locationData.country_name || 'Unknown'}
<b>🌐 IP:</b> ${locationData.ip || 'Unknown'}
<b>📡 ISP:</b> ${locationData.org || 'Unknown'}

<b>🖥️ Resolution:</b> ${screenResolution}
<b>🔗 Referrer:</b> ${referrer}
<b>Browser:</b> ${userAgent}
        `.trim();

        sendTelegramMessage(message);
        sessionStorage.setItem('visit_notified', 'true');
      };

      fetchLocationAndNotify();
    }
  }, []);
};

export default useVisitNotification;
