import { getRandomLetters } from '@/utils/ascii'
import cn from 'classnames'
import s from './page.module.css'
export default function AsciiArt() {

    return (
        <div className='flex gap-2' >
            {
                Array.from({ length: 100 }).map((_, index) => {
                    const rand = getRandomLetters(100)
                    return (
                        <p key={index} className={cn(s['typing-animation'], 'flex flex-col w-1.25 wrap-anywhere')}>{rand}</p>
                    )
                })
            }
        </div>
    );
}