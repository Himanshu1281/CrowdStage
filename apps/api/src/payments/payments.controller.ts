import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('initiate')
  async initiate(@Request() req, @Body() body: { ticketId: string; amount: number }) {
    return this.paymentsService.initiatePayment(body.ticketId, body.amount, req.user.email);
  }

  @Post('webhook')
  async webhook(@Body() body: any) {
    return this.paymentsService.handleWebhook(body);
  }
}
