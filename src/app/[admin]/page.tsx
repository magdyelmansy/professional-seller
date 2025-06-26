import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";



export default async function RegisteredPage({ searchParams }: { searchParams: Record<string, string> }) {
    const searchParamsResolved = await searchParams
    const page = parseInt(searchParamsResolved.page ?? "1", 10);
    const perPage = 10;
    const skip = (page - 1) * perPage;

    const [entries, totalCount] = await Promise.all([
        prisma.registered.findMany({
            skip,
            take: perPage,
            orderBy: { id: "asc" },
        }),
        prisma.registered.count(),
    ]);

    const totalPages = Math.ceil(totalCount / perPage);
    // const entries = await prisma.registered.findMany();

    return (
        <>

            <Suspense fallback={<div className="text-center">Loading...</div>}>
                <div className="min-h-screen bg-gray-50 py-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse block md:table">
                                <thead className="hidden md:table-header-group bg-gray-100">
                                    <tr className="border border-gray-300 md:border-none block md:table-row">
                                        {["ID", "First", "Last", "Email", "Phone", "City"].map((h) => (
                                            <th key={h} className="px-4 py-2 text-left md:table-cell block">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="block md:table-row-group">
                                    {entries.map((r) => (
                                        <tr key={r.id} className="border border-gray-200 md:border-none block md:table-row mb-2 md:mb-0">
                                            {[
                                                r.id,
                                                r.firstName,
                                                r.lastName,
                                                r.email,
                                                r.phone,
                                                r.city
                                            ].map((cell, idx) => (
                                                <td
                                                    key={idx}
                                                    className="px-4 py-2 block md:table-cell whitespace-nowrap"
                                                    role="cell"
                                                >
                                                    <span className="font-medium md:hidden">{["ID", "First", "Last", "Email", "Phone", "City"][idx]}: </span>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center mt-4 space-x-2">
                        <Link
                            href={`/registered?page=${Math.max(page - 1, 1)}`}
                            className={`px-3 py-1 border rounded ${page <= 1
                                    ? "text-gray-400 border-gray-300 pointer-events-none"
                                    : "text-blue-600 border-blue-400"
                                }`}
                        >
                            Previous
                        </Link>

                        <span>
                            Page {page} of {totalPages}
                        </span>

                        <Link
                            href={`/registered?page=${Math.min(page + 1, totalPages)}`}
                            className={`px-3 py-1 border rounded ${page >= totalPages
                                    ? "text-gray-400 border-gray-300 pointer-events-none"
                                    : "text-blue-600 border-blue-400"
                                }`}
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </Suspense>
        </>
    );
}