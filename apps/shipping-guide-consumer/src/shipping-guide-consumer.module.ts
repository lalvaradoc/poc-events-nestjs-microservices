import { Module } from '@nestjs/common';
import { ShippingGuideConsumerController } from './shipping-guide-consumer.controller';
import { ShippingGuideConsumerService } from './shipping-guide-consumer.service';
import { EventPublisherModule } from '@grupodistelsa/dist-ksm-lib-marketplace';

@Module({
  imports: [EventPublisherModule],
  controllers: [ShippingGuideConsumerController],
  providers: [ShippingGuideConsumerService],
})
export class ShippingGuideConsumerModule {}
