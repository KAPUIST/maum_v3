import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyController } from './survey/survey.controller';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Surveys } from './entities/surveys';
import { SurveyQuestions } from './entities/surveyQuestions';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'password',
          database: 'maum',
          entities: [Surveys, SurveyQuestions],
          synchronize: true,
          logging: true,
          keepConnectionAlive: true,
          charset: 'utf8mb4',
        };
      },
    }),
    SurveyModule,
  ],
  controllers: [AppController, SurveyController],
  providers: [AppService],
})
export class AppModule {}
