import style from './Dropdown.module.css';
import type { DropdownData } from '@planted/types';
import { useState, useMemo } from 'react';
import { debounceWrapper } from '../../utils/debounceWrapper';
import { DropdownService } from '../../services/DropdownService';

export default function Dropdown() {
    const [dropdownData, setDropdownData] = useState<DropdownData[]>([]);

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
        search(e.target.value);
    }

    return (
        <div className={`${style.dropdownOuter}`}>
            <div className={`${style.dropdownSearch}`}>
                <input type="text" name="dropdown-input" placeholder='Set Location' id="dropdownInput" onChange={handleDropdownChange} />
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