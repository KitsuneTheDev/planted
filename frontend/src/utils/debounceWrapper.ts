export function debounceWrapper<T extends (...args: Parameters<T>) => Promise<void> | void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => Promise<void> |void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function(this: T, ...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}