import './App.css';
import Header from "./components/Header/Header";
import NewPostModal from "./components/NewPostCard/NewPostModal";
import FilterAndSearchCard from "./components/FilterAndSearchCard/FilterAndSearchCard";
import Post from "./components/Post/Post";
import {useEffect, useState} from "react";
import EmptyBlock from "./components/EmptyBlock/EmptyBlock";
import usePosts from "./hooks/usePosts";
import PostService from "./api/PostService";
import {getTotalPages} from "./utils/pages";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";
import ErrorBlock from "./components/ErrorBlock/ErrorBlock";
import {useFetching} from "./hooks/useFetching";


function App() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({sort: 'default', query: ''});
    const sortedAndFilteredPosts = usePosts(data, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getTotalPages(totalCount, limit));
        setData(response.data);
    })

    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        void fetchPosts();
    }, [page]);

    return (<div className='page-container'>
        <Header/>
        <main className="main">
            {isModalOpen
                ? <NewPostModal
                    data={data}
                    setData={setData}
                    onClose={() => setIsModalOpen(false)}/>
                : ''}
            {isPostLoading
                ? <Loader/>
                : postError
                    ? <ErrorBlock error={postError} onRetry={fetchPosts}/>
                    : <>
                    <FilterAndSearchCard
                        filter={filter}
                        setFilter={setFilter}
                        defaultValue={'Сортировка по:'}
                        options={[{value: 'title', name: 'По названию'}, {
                            value: 'body', name: 'По описанию'
                        }]}/>
                    <div className="posts-list">
                        <div className="posts-header">
                            <div className="posts-heading">Посты</div>
                            <div className="posts-count">{data.length}</div>
                            <button
                                className="create-post-btn"
                                onClick={() => setIsModalOpen(true)}
                            >
                                + Добавить пост
                            </button>
                        </div>
                        {data.length === 0 ? <EmptyBlock/> : sortedAndFilteredPosts.map((post) => (
                            <Post post={post} key={post.id} data={data} setData={setData}/>))}

                    </div>
                    <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage}/>
                </>}
        </main>
    </div>);
}

export default App;
