import React from 'react';
import { useSearchParams } from "react-router-dom";
import * as JSURL from "jsurl";

export function useQueryParam(key) {
    let [searchParams, setSearchParams] = useSearchParams();
    let paramValue = searchParams.get(key);

    let value = React.useMemo(() => JSURL.parse(paramValue), [paramValue]);

    let setValue = React.useCallback(
        (newValue, options) => {
            let newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set(key, JSURL.stringify(newValue));
            setSearchParams(newSearchParams, options);
        },
        [key, searchParams, setSearchParams]
    );

    return [value, setValue];
}