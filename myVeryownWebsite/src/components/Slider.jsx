import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Slider({slides, numberOfCardsShown}){

    const numberOfPages = Math.ceil(slides.length/numberOfCardsShown)
    const [currentIndex, setCurrentIndex] = useState(0);

    const firstItemOfIndex = currentIndex*numberOfCardsShown
    const lastItemOfIndex = (firstItemOfIndex + numberOfCardsShown)
    const cardsShown = slides.slice(firstItemOfIndex, lastItemOfIndex )

    function handleNextSlide(){
        setCurrentIndex(currentIndex+1)
    }

    function handlePreviousSlide(){
        setCurrentIndex(currentIndex-1)
    }


    return(
        <div className='flex items-center justify-center'>
           <button disabled={!(currentIndex+1 > 1)} onClick={handlePreviousSlide} className='p-4 aspect-square mr-3 rounded-full hover:bg-amber-800/5 transition-all group'>
                <ChevronLeft className='group-disabled:text-amber-700/25 text-amber-950' />
           </button>
            <div className='  w-fit grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {cardsShown}
            </div>
           <button disabled={!(currentIndex+1 < numberOfPages)} onClick={handleNextSlide} className='p-4 aspect-square ml-3 rounded-full hover:bg-amber-800/5 transition-all group'>
                <ChevronRight className='group-disabled:text-amber-700/25 text-amber-950' />
            </button>
        </div>
    )
}
