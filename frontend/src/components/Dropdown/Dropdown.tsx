import style from './Dropdown.module.css';
import { useDropdown } from './useDropdown';

export default function Dropdown() {

    const { dropdownData, handleDropdownChange } = useDropdown();

    return (
        <div className={`${style.dropdownOuter}`}>
            <div className={`${style.dropdownSearch}`}>
                <input type="text" name="dropdown-input" placeholder='Istanbul' id="dropdownInput" onChange={handleDropdownChange} />
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