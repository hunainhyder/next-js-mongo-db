import RemoveBtn from '@/components/RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

export default function Question() {
    return <>
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Question</h2>
                <div>Answers</div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <RemoveBtn />
                <Link href={'/editQuestion'}>
                    <HiPencilAlt size={24}></HiPencilAlt>
                </Link>
            </div>
        </div>
    </>
}