import style from './Dropdown.module.css';
import type { DropdownData } from '@planted/types';
import { useState, useCallback, useMemo } from 'react';
import { debounceWrapper } from '../../utils/debounceWrapper';
import { DropdownService } from '../../services/DropdownService';

export default function Dropdown() {
    const [query, setQuery] = useState<string>('');
    const [dropdownData, setDropdownData] = useState<DropdownData[]>([]);

    const updateQuery = useCallback((newQuery: string) => {
        setQuery(newQuery);
    }, []);

    const search = useMemo(
        () => debounceWrapper(async (query: string) => {
                if(query.length < 2) {
                    setDropdownData([]);
                    return;
                } else {
                    const response = await DropdownService.getDropdownData(query);
                    if(!response.isError) {
                        setDropdownData(response.responseData.length === 0 ? [] : response.responseData);
                        return;
                    }
                }
            }, 500), []);

    const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateQuery(e.target.value);
        search(e.target.value);
    }

    return (
        <div className={`${style.dropdownOuter}`}>
            <div className={`${style.dropdownSearch}`}>
                <label htmlFor="dropdownInput">Select Location</label>
                <input type="text" name="dropdown-input" id="dropdownInput" onChange={handleDropdownChange} />
            </div>
            <div className={`${style.dropdownDisplay} ${dropdownData.length === 0 ? style.hidden : null}`}>
                {dropdownData.map((data, index) => {
                    return (
                    <div className={`${style.dataElement}`} key={index}>
                        {data.city}
                    </div>
                )
                })}
            </div>
        </div>
    );
}