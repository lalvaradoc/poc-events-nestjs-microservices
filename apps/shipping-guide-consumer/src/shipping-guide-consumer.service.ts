import { EventPublisherService } from '@grupodistelsa/dist-ksm-lib-marketplace';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingGuideConsumerService {
  constructor(private readonly eventPublisher: EventPublisherService) {}
  consume(input: any): string {
    const newInput = { ...input };
    newInput.eventName = 'shipping.order.pickedup';
    this.eventPublisher.emit(newInput);
    return 'ok';
  }
}
