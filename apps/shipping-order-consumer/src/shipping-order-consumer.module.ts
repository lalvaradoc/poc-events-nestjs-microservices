import { Module } from '@nestjs/common';
import { ShippingOrderConsumerController } from './shipping-order-consumer.controller';
import { ShippingOrderConsumerService } from './shipping-order-consumer.service';
import {
  BFFConfigModule,
  EventPublisherModule,
} from '@grupodistelsa/dist-ksm-lib-marketplace';

@Module({
  imports: [EventPublisherModule],
  controllers: [ShippingOrderConsumerController],
  providers: [ShippingOrderConsumerService],
})
export class ShippingOrderConsumerModule {}
