import { useEffect } from 'react';

import tags from '@/config/tags';
import { blogSelector } from '@/store/selectors/selectors';
import { setActiveFilters, setTagsOfCurrentBlog } from '@/store/slices/blog';

import { useAppDispatch, useAppSelector } from './useStore';

const useFilters = () => {
    const { activeFilters, currentBlog, tagsOfCurrentBlog } =
        useAppSelector(blogSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(activeFilters);
    }, [activeFilters]);

    const onHandleActiveFilters = (tag: string) => () => {
        if (tag === 'All topics') {
            dispatch(setActiveFilters(['All topics']));
            dispatch(setTagsOfCurrentBlog(tags));
            return;
        }

        if (activeFilters.includes(tag)) {
            const filtered = activeFilters.filter(curtag => curtag !== tag);
            dispatch(setActiveFilters(filtered));
            dispatch(setTagsOfCurrentBlog(filtered));
        } else {
            dispatch(setActiveFilters([...activeFilters, tag]));
            dispatch(setTagsOfCurrentBlog([...activeFilters, tag]));
        }
    };

    if (activeFilters.includes('All topics') && activeFilters.length > 1) {
        const filtered = activeFilters.filter(
            curtag => curtag !== 'All topics',
        );
        dispatch(setActiveFilters(filtered));
        dispatch(setTagsOfCurrentBlog(filtered));
    }

    return {
        onHandleActiveFilters,
        activeFilters,
    };
};

export default useFilters;
