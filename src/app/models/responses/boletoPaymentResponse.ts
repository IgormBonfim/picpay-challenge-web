import { EnumValue } from "@/app/models/enumValue";

export interface BoletoPaymentResponse {
    id: number;
    chargeId: string;
    boletoPagSeguroId: string;
    barcode: string;
    status: EnumValue;
    dueDate: Date;
    createdAt: Date;
    payedAt: Date;
}