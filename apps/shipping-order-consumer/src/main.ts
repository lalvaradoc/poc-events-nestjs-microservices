import { NestFactory } from '@nestjs/core';
import { ShippingOrderConsumerModule } from './shipping-order-consumer.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ShippingOrderConsumerModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'],
      queue: 'queue.shippingorder.create',
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
