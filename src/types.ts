export type LoanStatus = 'Pendiente' | 'Devuelto';

export interface Loan {
  id?: string;
  borrowerName: string;
  pickupDate: string;
  room: string;
  pickupTime: string;
  pickupSignature: string;
  returnerName?: string;
  returnTime?: string;
  returnSignature?: string;
  status: LoanStatus;
  createdAt: any;
  updatedAt: any;
}

export const ROOMS = [
  "Solgas Hogar",
  "Energía",
  "Espíritu Colaborativo",
  "Espíritu Íntegro",
  "AUMA",
  "Espíritu Ágil"
];
