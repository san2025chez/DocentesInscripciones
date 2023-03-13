import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './database/database.module';
import { Connection } from 'typeorm';

@Module({
  imports: [/* TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'inscripciones-db',
    port: 5432,
    username: 'inscripciones',
    password: '123',
    database: 'inscripciones',
  entities: ["dist/**//* entity{.ts,.js}"],
    synchronize: true, */
  
    DatabaseModule,AuthModule, UsersModule, EnvModule ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {
 // constructor(private readonly connection: Connection) { }
}
