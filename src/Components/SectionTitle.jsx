import React from 'react';

const SectionTitle = ( { subHeading, heading }) => {
    return (
        <div className='mx-auto md:w-1/2 my-3'>
            <p className='text-slate-600 mb-2 text-center'>{subHeading}</p>
            <h3 className='text-3xl border-4 border-y-black py-2 text-center uppercase font-bold'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;