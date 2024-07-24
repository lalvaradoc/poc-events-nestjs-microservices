import { Controller, Get } from '@nestjs/common';
import { ShippingOrderConsumerService } from './shipping-order-consumer.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ShippingOrderConsumerController {
  constructor(
    private readonly shippingOrderConsumerService: ShippingOrderConsumerService,
  ) {}

  @EventPattern('order.readyforpickup')
  consumer(@Payload() input: any, @Ctx() context: RmqContext): string {
    return this.shippingOrderConsumerService.consume(input);
  }
}
