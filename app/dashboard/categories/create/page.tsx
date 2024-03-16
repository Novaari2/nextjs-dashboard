import Form from "@/app/ui/categories/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default async function Page(){
    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                {label: 'Categories', href: '/dashboard/catgeories'},
                {
                    label: 'Create Categories',
                    href: '/dashboard/categories/create',
                    active: true,
                },
            ]}
            />
            <Form />
        </main>
    )
}