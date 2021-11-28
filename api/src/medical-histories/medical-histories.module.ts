import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalHistory,
  MedicalHistorySchema,
  Diagnosis,
  DiagnosisSchema,
} from './entities/medical-history.entity';
import { MedicalHistoriesService } from './medical-histories.service';
import { MedicalHistoriesController } from './medical-histories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalHistory.name,
        schema: MedicalHistorySchema,
      },
      {
        name: Diagnosis.name,
        schema: DiagnosisSchema,
      },
    ]),
    HttpModule,
  ],
  controllers: [MedicalHistoriesController],
  providers: [MedicalHistoriesService],
})
export class MedicalHistoriesModule {}
