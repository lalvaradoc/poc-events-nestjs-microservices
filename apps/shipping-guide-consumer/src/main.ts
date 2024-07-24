import { NestFactory } from '@nestjs/core';
import { ShippingGuideConsumerModule } from './shipping-guide-consumer.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ShippingGuideConsumerModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'],
      queue: 'queue.update.trackinginfo',
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
