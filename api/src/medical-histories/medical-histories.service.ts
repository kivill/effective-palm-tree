import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MedicalHistory,
  MedicalHistoryDocument,
  Diagnosis,
  DiagnosisDocument,
} from './entities/medical-history.entity';

@Injectable()
export class MedicalHistoriesService {
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistoryDocument>,
    @InjectModel(Diagnosis.name)
    private readonly diagnosisModel: Model<DiagnosisDocument>,
  ) {}

  async create(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    const newHistory = new this.medicalHistoryModel(createMedicalHistoryDto);
    //Здесь должно быть общение с моделью

    return await newHistory.save();
  }

  async createMock(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    const newHistory = new this.medicalHistoryModel(createMedicalHistoryDto);
    newHistory.deathRisk = 90;
    const newDiagnosis1 = new this.diagnosisModel({
      diagnosis: 'кашель + головная боль',
      influence: 5,
      actions: 'Доп. обследование',
    });
    newHistory.diagnoses.push(newDiagnosis1);
    const newDiagnosis2 = new this.diagnosisModel({
      diagnosis: 'Отказ легкого + головная боль',
      influence: 70,
      actions: 'Доп. обследование',
    });
    newHistory.diagnoses.push(newDiagnosis2);
    const newDiagnosis3 = new this.diagnosisModel({
      diagnosis: 'Отказ легкого + кашель',
      influence: 90,
      actions: 'срочная реанимация',
    });
    newHistory.diagnoses.push(newDiagnosis3);

    return await newHistory.save();
  }

  async findAll() {
    return await this.medicalHistoryModel.find({});
  }

  async findOne(id: string) {
    const medicalHistory = await this.medicalHistoryModel.findOne({ _id: id });
    if (!medicalHistory) {
      throw new NotFoundException('Point not found.');
    }
    return medicalHistory;
  }

  async update(id: string, updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return `This action updates a #${id} medicalHistory`;
  }
}
