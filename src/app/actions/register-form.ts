
"use server";
import prisma from "@/lib/prisma";


export type Errors = Record<string, string>;
export type FormState = {
    errors?: Errors;
}
export async function handleRegister(prevState: FormState, formData: FormData) {


    const raw = Object.fromEntries(formData.entries()) as { firstName: string, lastName: string, email: string, phone: string, city: string };
    const { firstName, lastName, email, phone, city } = raw;
    const data = { firstName, lastName, email, phone, city };   
    const errors: Record<string, string> = {};

    if (!firstName?.trim()) errors.firstName = "الاسم الأول مطلوب";
    if (!lastName?.trim()) errors.lastName = "اسم العائلة مطلوب";
    if (
        !email ||
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
        errors.email = "بريد إلكتروني غير صالح";
    if (!phone?.trim()) errors.phone = "رقم الهاتف مطلوب";
    if (!city?.trim()) errors.city = "اختر المدينة";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await prisma.registered.create({ data: data });

}
