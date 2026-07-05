interface localStorageProps<T> {
    item?: T;
    tag: string;
}

export function saveToLocal<T>({item, tag}: localStorageProps<T>): void{
    localStorage.setItem(tag, JSON.stringify(item));
}

export function loadFromLocal<T>({tag}: localStorageProps<T>): T | void{
    const item = localStorage.getItem(tag);

    if(!item) {
        return;
    } else {
        return JSON.parse(item);
    }
}

export function deleteLocal<T>({tag}: localStorageProps<T>): void{
    localStorage.removeItem(tag);
}