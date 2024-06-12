
import React, { useState } from 'react';
import useCountries from '../assets/Api/useCountiresData';
import { FaArrowUp } from "react-icons/fa";

const Allcountrydata = () => {
    const { countries } = useCountries(); 
    const [searchQuery, setSearchQuery] = useState(""); 

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );


    function scrolltrigger() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='mt-24'>
            {/* Search */}
            <div className="mb-10">
                <form className="max-w-md mx-auto">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            required
                        />
                        {/* No need for this button */}
                    </div>
                </form>
            </div>

            <div className='flex flex-wrap gap-3 w-[900px] bg-[#f0f0f0] mx-auto justify-center items-start'>
                {filteredCountries.map((country, index) => (
                    <div key={index} className='w-[400px] h-[600px] bg-white p-3 m-2 hover:scale-[1.005] hover:shadow-2xl rounded-lg transition-all duration-300 ease-in-out'>
                        <img src={country.flags.png} alt={country.name.common} className='w-full h-auto' />
                        <p className='text-3xl text-[orange] text-center font-[700] my-2'>{country.name.common}</p>
                        <div className='flex items-center justify-start px-3'>
                            <p className='text-3xl text-[#616161] font-[700] my-2'>Capital : <span className='text-[25px] text-[#747474]'>{country.capital}</span></p>
                        </div>
                        <div className='flex items-center justify-start px-3'>
                            <p className='text-3xl text-[#616161] font-[700] my-2'>Languages : <span className='text-[25px] text-[#747474]'>{country.languages && Object.values(country.languages).map((language, index) => (
                                <span key={index} className='text-xl text-[20px] text-[#616161]'>{language} </span>
                            ))}</span></p>
                        </div>
                        <div className='flex items-center justify-start px-3'>
                            <p className='text-3xl text-[#616161] font-[700] my-2'>Population : <span className='text-[25px] text-[#747474]'>{country.population}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className='bg-green-500 rounded fixed right-3 bottom-3'onClick={scrolltrigger} ><FaArrowUp size={40}/></button>
            </div>
        </div>
    );
}

export default Allcountrydata;


