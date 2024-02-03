"use client";
import React, { useState } from 'react';

const Page = ({updatesearch}) => {

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };

    return (
        <>
            <div className='text-center mt-3 mb-3'>
                <input
                    className='text-center '
                    type="text"
                    placeholder='Search....'
                    value={searchTerm}
                    onChange={handleSearchChange} 
                />
            </div>
        </>
    );
};

export default Page;
