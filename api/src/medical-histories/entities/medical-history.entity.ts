import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';

export type DiagnosisDocument = Diagnosis & Document;

@Schema()
export class Diagnosis extends Document {
    @Prop()
    diagnosis: string;

    @Prop()
    influence: number;

    @Prop()
    actions: string;
}
export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);


export type MedicalHistoryDocument = MedicalHistory & Document;

@Schema({
    versionKey: false,
    timestamps: true,
})
export class MedicalHistory {
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    history: string;

    @Prop()
    deathRisk: number;

    @Prop({ type: [DiagnosisSchema], default: [] })
    diagnoses: [Diagnosis]
}

export const MedicalHistorySchema = SchemaFactory.createForClass(MedicalHistory);
