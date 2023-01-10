import React, { useState } from 'react'

function useToggle(defaultIndex) {

    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    const toggleState = (index) => {
        setCurrentIndex(index);
    }

    return [currentIndex, toggleState];
}

export default useToggle