import { Test, TestingModule } from '@nestjs/testing';
import { ShippingGuideConsumerController } from './shipping-guide-consumer.controller';
import { ShippingGuideConsumerService } from './shipping-guide-consumer.service';

describe('ShippingGuideConsumerController', () => {
  let shippingGuideConsumerController: ShippingGuideConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShippingGuideConsumerController],
      providers: [ShippingGuideConsumerService],
    }).compile();

    shippingGuideConsumerController = app.get<ShippingGuideConsumerController>(ShippingGuideConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shippingGuideConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
