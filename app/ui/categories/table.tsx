import { fetchCategoriesPages, fetchFilteredCategories } from "@/app/lib/data"
import Image from "next/image";

export default async function CategoriesTable({
    query,
    currentPage,
    }: {query: string;
        currentPage: number;
    }) {
    const categories = await fetchFilteredCategories(query,currentPage);
    console.log(categories);
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {categories?.map((category) => (
                            <div key={category.id} className="mb-2 w-full rounded-md bg-white p-4">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <Image src={category.photo} className="mr-2 rounded-full" width={28} height={28} alt={`${category.name}'s category picture`} />
                                            <p>{category.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <div className="h-10 w-10 rounded bg-gray-100">Edit</div>
                                        <div className="h-10 w-10 rounded bg-gray-100">Delete</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-4 py-5 font-medium">
                                        Photo
                                    </th>
                                    <th scope="col" className="relative py-3 pl-6 pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {categories?.map((category) => (
                                    <tr key={category.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <td className="whitespace-nowrap px-3 py-3">
                                            <p>{category.name}</p>
                                        </td>
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex items-center gap-3">
                                                <Image src="http://roduct-ucket.nos.wjv-1.neo.id/assets/category/bJZ7Ryhv6CgqUaZduMxc1rfwLBjjeqNdV1jkPHcf.jpg" className="rounded" width={28} height={28} alt={`${category.name}`} />
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}