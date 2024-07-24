import { Module } from '@nestjs/common';
import { CoreApiController } from './core-api.controller';
import { CoreApiService } from './core-api.service';
import { EventPublisherModule } from '@grupodistelsa/dist-ksm-lib-marketplace';

@Module({
  imports: [EventPublisherModule],
  controllers: [CoreApiController],
  providers: [CoreApiService],
})
export class CoreApiModule {}
