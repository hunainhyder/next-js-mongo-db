import RemoveBtn from '@/components/RemoveBtn'

export default function QuestionsList() {
    return <>
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2>Question</h2>
                <div>Answers</div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <RemoveBtn />
            </div>
        </div>
    </>
}