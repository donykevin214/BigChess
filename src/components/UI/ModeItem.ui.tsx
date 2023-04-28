import React , {useContext} from 'react'
import { StateContext } from '@/Provider';
export interface ModeItemProps{
    SVG: React.ReactNode,
    activated?: boolean,
    mode_number: number
}

export const ModeItem: React.FC<ModeItemProps> = ({ SVG, activated, mode_number }: ModeItemProps) => {
    const {
        setGameMode
    } = useContext(StateContext)
    return(
        <div className={`w-[64px] h-[64px] rounded-md flex items-center justify-center border ${activated? 'hover:bg-red-200' : 'hover:bg-gray-200'} cursor-pointer ${activated ? 'bg-red-100' : 'bg-white'}`} onClick={() => setGameMode(mode_number)}>
            { SVG }
        </div>
    )
}