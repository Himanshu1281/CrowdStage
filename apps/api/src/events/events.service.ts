import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { EventsGateway } from './events.gateway';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class EventsService {
  constructor(
    private prisma: PrismaService,
    private eventsGateway: EventsGateway,
    private notificationsService: NotificationsService,
  ) {}

  create(data: Prisma.EventCreateInput) {
    return this.prisma.event.create({ data });
  }

  async updateFunding(id: string, amount: number) {
    const event = await this.prisma.event.update({
      where: { id },
      data: { currentFunding: { increment: amount } },
    });
    
    // Broadcast update
    this.eventsGateway.broadcastFundingUpdate(id, Number(event.currentFunding));

    // Check for milestones
    if (Number(event.currentFunding) >= Number(event.fundingGoal)) {
      await this.notificationsService.sendToTopic(
        `event_${id}`,
        'Event Confirmed!',
        `${event.title} has reached its funding goal!`,
      );
    }

    return event;
  }

  findAll() {
    return this.prisma.event.findMany({
      include: { organizer: true },
    });
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({
      where: { id },
      include: { organizer: true, tickets: true },
    });
  }

  update(id: string, data: Prisma.EventUpdateInput) {
    return this.prisma.event.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
