export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string; //email es una propiedad opcional
    phoneNumber?: number; //opcional
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}