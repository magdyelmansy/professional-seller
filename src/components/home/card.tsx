import Image from "next/image";

interface CardProps {
    image: string;
    header: string;
    description: string;
}
export function Card({ image, header, description }: CardProps) {
    return (

        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-6">
            <div className="flex justify-between items-center gap-4" >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{header}</h2>
                <Image src={image} alt={header} width={45} height={45} />
            </div>

            <hr  className="my-3"/>
            <p className="text-gray-600">{description}</p>

        </div>
    )
}