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
    newHistory.deathRisk = Math.floor(Math.random() * 100) + 1;
    const newDiagnosis = new this.diagnosisModel({
      diagnosis: 'кашель',
      influence: 10,
      actions: '',
    });
    newHistory.diagnoses.push(newDiagnosis);
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
