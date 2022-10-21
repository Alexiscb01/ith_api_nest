import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/Users/user/user.module';
import { SalesModule } from './api/Sales/sales.module';
import { DetailsModule } from './api/details/details.module';


@Module({
  imports: [Connection, UserModule, SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
