import { EnumValue } from "@/app/models/enumValue";

export interface UserTransactionResponse {
    fullName: string;
    email: string;
    userType: EnumValue;
}