import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async initiatePayment(ticketId: string, amount: number, userEmail: string) {
    // Mock Easebuzz Initiation
    // In production, this would call Easebuzz API to get an access key
    const transactionId = `TXN_${Date.now()}`;
    
    // Create pending payment record
    await this.prisma.payment.create({
      data: {
        ticket: { connect: { id: ticketId } },
        amount: amount,
        providerId: transactionId,
        status: 'PENDING',
      },
    });

    return {
      access_key: 'mock_access_key_123',
      payment_url: `https://testpay.easebuzz.in/pay/${transactionId}`, // Mock URL
    };
  }

  async handleWebhook(data: any) {
    // Verify hash and update payment status
    const { txnid, status } = data;
    
    if (status === 'success') {
      await this.prisma.payment.updateMany({
        where: { providerId: txnid },
        data: { status: 'SUCCESS' },
      });
      
      // Also confirm the ticket
      // Logic to find ticket by payment and update it would go here
    }
    
    return { status: 'ok' };
  }
}
