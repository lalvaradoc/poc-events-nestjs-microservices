import { EventPublisherService } from '@grupodistelsa/dist-ksm-lib-marketplace';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreApiService {
  constructor(private readonly eventPublisher: EventPublisherService) {}
  getHello(input: any): string {
    this.eventPublisher.emit(input);
    return 'ok';
  }
}
