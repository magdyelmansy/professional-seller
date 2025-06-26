"use client";

import { useFormStatus } from "react-dom";


export function SubmitButton() {
  const { pending } = useFormStatus();
  return (


    <button
      type="submit"
      disabled={pending}
      className="bg-amber-700 hover:bg-amber-800 text-white py-2 rounded col-span-2"
    >
      {pending ? "جاري الإرسال..." : "إرسال"}
    </button>

  );


}