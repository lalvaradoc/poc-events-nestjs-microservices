import { Test, TestingModule } from '@nestjs/testing';
import { ShippingOrderConsumerController } from './shipping-order-consumer.controller';
import { ShippingOrderConsumerService } from './shipping-order-consumer.service';

describe('ShippingOrderConsumerController', () => {
  let shippingOrderConsumerController: ShippingOrderConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShippingOrderConsumerController],
      providers: [ShippingOrderConsumerService],
    }).compile();

    shippingOrderConsumerController = app.get<ShippingOrderConsumerController>(ShippingOrderConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shippingOrderConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
