'use client';

import Link from 'next/link';
import {
    PencilIcon,
    ArrowUpIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { createCategories } from '@/app/lib/actions';

export default function Form(){
    const initialState = {
        message: null,
        errors: {}
      };

    const [state, dispatch] = useFormState(createCategories, initialState);
    return(
        <form action={dispatch}>
            <div className='rounded-md bg-gray-50 p-4 md:p-6'>
                <div className='mb-4'>
                    <label htmlFor="nama" className='mb-2 block text-sm font-medium'>Categories Name</label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input id='nama' name='nama' type='text' placeholder='Enter Categories name' className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500' />
                            <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="photo" className='mb-2 block text-sm font-medium'>Categories Photo</label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input type="file" id='photo' name='photo' placeholder='Choose photo' className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2' />
                            <ArrowUpIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex justify-end gap-4'>
                <Link href='/dashboard/categories' className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'>
                    Cancel
                </Link>
                <Button type='submit'>Create Categories</Button>
            </div>
        </form>
    );
}