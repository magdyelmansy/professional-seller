'use client';

import Image from 'next/image';

interface HeroSectionProps {
    description: string;
}

export default function HeroSection({ description }: HeroSectionProps) {
    return (
        <>
            <div className='absolute left-0 right-0  h-[400px] ' >
                <div className='w-full h-full  bg-white/30 z-1 relative '></div>
                <Image
                    src="/assets/hero-img.jpg" // Save your background image as public/hero.jpg
                    alt="Hero background"
                    fill
                    className="object-cover z-0 object-top"
                    priority
                />

            </div>

            {/* Background Image */}

            <section className="relative h-[400px]  overflow-visible z-10 mb-8">



                {/* Overlay content */}
                <div className="relative  flex flex-col items-center justify-between  text-center text-black   h-full ">
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <Image src="/assets/logo.svg" alt='logo' width="100" height="25" />
                        <p className="text-sm mt-2 font-bold">

                            تطوير المهارات مع دخل اضافي
                        </p>

                        {/* Navbar */}
                        <div className="flex gap-4 bg-white rounded-full px-4 py-2 text-sm font-medium mt-3">
                            <button className="hover:text-orange-600 cursor-pointer">الرئيسية</button>
                            <button className="hover:text-orange-600 cursor-pointer">من نحن</button>
                            <button className="hover:text-orange-600 cursor-pointer">من يبحث الآن</button>
                            <button className="hover:text-orange-600 cursor-pointer">سجّل الآن</button>
                        </div>
                    </div>





                    {/* Description */}
                    <div className="bg-white  text-gray-800 mt-6 rounded-xl max-w-xl px-6 py-4 text-sm mb-1">
                        {description}
                    </div>
                </div>
            </section>
        </>

    );
}
