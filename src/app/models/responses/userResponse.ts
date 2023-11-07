import { EnumValue } from "@/app/models/enumValue";

export interface UserResponse {
    fullName: string;
    email: string;
    userType: EnumValue
}