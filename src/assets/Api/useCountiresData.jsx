

import { useState, useEffect } from "react";

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const api = 'https://restcountries.com/v3.1/all';

    const getAllCountries = async () => {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched countries data:", data);
            
            setCountries(data);
            setFilteredCountries(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAllCountries();
    }, []); 

    useEffect(() => {
        
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCountries(filtered);
    }, [countries, searchQuery]);

    return {
        countries: filteredCountries,
        searchQuery,
        setSearchQuery,
    };
};

export default useCountries;
