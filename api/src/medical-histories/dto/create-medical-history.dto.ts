export class CreateDiagnosisDto {
  diagnosis: string;
  influence: number;
  actions: string;
}

export class CreateMedicalHistoryDto {
  history: string;
  deathRisk: number;
  diagnoses?: CreateDiagnosisDto[];
}
