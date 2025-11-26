import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async sendPushNotification(token: string, title: string, body: string) {
    // Mock FCM sending
    console.log(`[Mock FCM] Sending to ${token}: ${title} - ${body}`);
    return { success: true, messageId: `msg_${Date.now()}` };
  }

  async sendToTopic(topic: string, title: string, body: string) {
    console.log(`[Mock FCM] Sending to topic ${topic}: ${title} - ${body}`);
    return { success: true, messageId: `msg_${Date.now()}` };
  }
}
