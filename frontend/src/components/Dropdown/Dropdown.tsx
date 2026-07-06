import style from './Dropdown.module.css';
import { useDropdown } from './useDropdown';

export default function Dropdown() {

    const { dropdownData, handleDropdownChange, handleOptionClick, dropdownPlaceholder } = useDropdown();

    return (
        <div className={`${style.dropdownOuter}`}>
            <div className={`${style.dropdownSearch}`}>
                <input type="text" name="dropdown-input" placeholder={dropdownPlaceholder} id="dropdownInput" onChange={handleDropdownChange} />
            </div>
            <div className={`${style.dropdownDisplay} ${dropdownData.length === 0 ? style.hidden : null}`}>
                {dropdownData.map((data, index) => {

                    return (
                    <div className={`${style.dataElement}`} key={index}  onClick={(event) => handleOptionClick({lat: data.lat, lon: data.lon}, event)}>
                        <div className={style.city}>{data.city[0]?.toUpperCase() + data.city.slice(1)}</div>
                        <div className={style.country}>{data.country.toUpperCase()}</div>
                    </div>
                )
                })}
            </div>
        </div>
    );
}