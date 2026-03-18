import {useMemo} from "react";

export const useSortedPosts = (data, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('Сработал sortedPosts')
        if (sort !== 'default') {
            return  [...data].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return data;
    },[data, sort])

    return sortedPosts;

}
export const usePosts = (data, sort, query) => {
    const sortedPosts = useSortedPosts(data, sort);

    const sortedAndFilteredPosts = useMemo(() => {
        console.log('Сработал sortedAndFilteredPosts');
        if (query){
            return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        }
        return sortedPosts
    },[sortedPosts,query])

    return sortedAndFilteredPosts

}

export default usePosts;
