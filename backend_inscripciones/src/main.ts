import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as basicAuth from 'express-basic-auth';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { EnvService } from './env/env.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });

  app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});



  const options = new DocumentBuilder()
    .setTitle('Prestamos Sanchez Api')
    .setDescription('The API for inscripciones')
    .setVersion('1.0')
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
    .build();
    const config = new EnvService().read();
  app.use('/doc', basicAuth({
    challenge: true,
    users: { ['sanchez']: 'sanchez2020' },
  }));

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/doc', app, document);
  await app.listen(3000);
}
bootstrap();
