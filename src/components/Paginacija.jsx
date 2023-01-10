import React from 'react';
import '../styles/Paginacija.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Paginacija = ({ pages,currentPage,setCurrentPage }) => {

    const generatedPages = [];
    for (let i = 1; i <= pages; i++){
        generatedPages.push(i);
    }

    return (
        <div className='paginacija'>
            <button disabled ={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className='page prethodna'>
                <ArrowBackIosIcon />
            </button>
            {generatedPages.map(page => 
                <div onClick={()=> setCurrentPage(page)} className={currentPage === page ? "page active" : "page"} key={page}>
                    {page}
                </div>
            )}

            <button disabled ={currentPage === pages} onClick={() => setCurrentPage(prev => prev + 1)} className='page sledeca'>
                <ArrowForwardIosIcon />
            </button>
    </div>
  )
}

export default Paginacija