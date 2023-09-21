import QuestionList from '@/components/QuestionsList'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <QuestionList />
      <Link href={'/editQuestion'}>
        <HiPencilAlt size={24}></HiPencilAlt>
      </Link>
    </>
  )
}
