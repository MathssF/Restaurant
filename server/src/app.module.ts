import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { CuserController } from './cuser/cuser.controller';



@Module({
  imports: [ClientModule, UserModule],
  controllers: [AppController, CuserController],
  providers: [AppService],
})
export class AppModule {}
