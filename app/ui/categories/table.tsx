import { fetchCategoriesPages, fetchFilteredCategories } from "@/app/lib/data"
import Image from "next/image";

export default async function CategoriesTable({query,currentPage}:{query: string,currentPage: number}) {
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
                </div>
            </div>
        </div>
    )
}