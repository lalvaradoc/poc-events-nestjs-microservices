import { Controller, Get } from '@nestjs/common';
import { ShippingGuideConsumerService } from './shipping-guide-consumer.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ShippingGuideConsumerController {
  constructor(
    private readonly shippingGuideConsumerService: ShippingGuideConsumerService,
  ) {}

  @EventPattern('shipping.order.created.3p')
  consumer(@Payload() input: any, @Ctx() context: RmqContext): string {
    return this.shippingGuideConsumerService.consume(input);
  }
}
