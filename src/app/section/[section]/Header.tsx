'use client'
import React from 'react';
import { useParams } from 'next/navigation';

const Header = ({ section }: { section: string }) => {

    return (
        <header className=" text-white p-10 flex justify-center mb-4 ">
            <h1 className="text-3xl font-bold capitalize text-center">{section}</h1>
        </header>
    );
};

export default Header;