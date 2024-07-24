import { EventPublisherService } from '@grupodistelsa/dist-ksm-lib-marketplace';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingOrderConsumerService {
  constructor(private readonly eventPublisher: EventPublisherService) {}
  consume(input: any): string {
    console.log(input);
    const newInput = { ...input };
    newInput.eventName = 'shipping.order.created.3p';
    this.eventPublisher.emit(newInput);
    return 'ok';
  }
}
