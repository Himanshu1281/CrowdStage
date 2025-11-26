import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinEvent')
  handleJoinEvent(@MessageBody() eventId: string) {
    // Client joins a room specific to the event
    // In a real app, we would use client.join(`event_${eventId}`)
    // For simplicity, we just log it
    console.log(`Client joined event: ${eventId}`);
  }

  // Method to broadcast funding updates
  broadcastFundingUpdate(eventId: string, newFunding: number) {
    this.server.emit(`fundingUpdate_${eventId}`, { funding: newFunding });
  }
}
