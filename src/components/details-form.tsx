

import { SubmitButton } from "./submit-button";
// import {  useActionState } from "react";
// import { FormState, handleRegister } from "@/app/actions/register-form";
import prisma from "@/lib/prisma";


export default function DetailsForm() {



    async function handleRegister(formData: FormData) {
        "use server";

        const raw = Object.fromEntries(formData.entries()) as { firstName: string, lastName: string, email: string, phone: string, city: string };
        const { firstName, lastName, email, phone, city } = raw;
        const data = { firstName, lastName, email, phone, city };


        await prisma.registered.create({ data: data });

    }

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-gradient-to-br from-gray-900 to-black text-white p-8 flex items-center justify-center text-center">
                <div>
                    <h2 className="text-xl font-bold mb-4">سجّل الآن وابدئي رحلتك!</h2>
                    <p className="text-sm leading-loose">
                        هل أنتِ مستعدة لتطوير مهاراتكِ والحصول على دخل إضافي في بيئة داعمة ومحفزة؟ املئي نموذج التسجيل وسيتواصل معكِ فريق البرنامج خلال أيام قليلة.
                    </p>
                </div>
            </div>
            {/* Form Section */}
            <div className="p-8 md:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-right">تسجيل</h2>
                <form action={handleRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="الاسم الأول"
                        className="p-2 border rounded text-right"
                        required
                    />
                    {/* {state?.errors && (
                        <p className="text-red-600">{state.errors.firstName}</p>
                    )} */}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="اسم العائلة"
                        className="p-2 border rounded text-right"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        className="p-2 border rounded col-span-2 text-right"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="رقم الهاتف"
                        className="p-2 border rounded col-span-2 text-right"
                        required
                    />
                    <select
                        name="city"
                        className="p-2 border rounded col-span-2 text-right"
                        required
                    >
                        <option value="">اختر مدينة</option>
                        <option value="الرياض">الرياض</option>
                        <option value="جدة">جدة</option>
                        <option value="الدمام">الدمام</option>
                    </select>
                    <SubmitButton />
                </form>
            </div>

            {/* Text Section */}

        </div>

    );
}
