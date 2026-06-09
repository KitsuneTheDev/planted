import { useState, useMemo } from "react";
import type { DropdownData } from "@planted/types";
import { debounceWrapper } from "../../utils/debounceWrapper";
import { DropdownService } from "../../services/DropdownService";

export function useDropdown() {
    
    const [dropdownData, setDropdownData] = useState<DropdownData[]>([]);

    const search = useMemo(
        () => debounceWrapper(async (query: string) => {
            if(query.length < 2) {
                setDropdownData([]);
                return;
            } else {
                const response = await DropdownService.getDropdownData(query);
                if(!response.isError) {
                    const data = response.responseData;
                    setDropdownData(data.length === 0 ? [] : data);
                    return;
                }
            }
        }, 500), []);

    const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        search(e.target.value);
    }

    return { dropdownData, handleDropdownChange }
}