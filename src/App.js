import './App.css';
import Header from "./components/Header/Header";
import NewPostCard from "./components/NewPostCard/NewPostCard";
import FilterAndSearchCard from "./components/FilterAndSearchCard/FilterAndSearchCard";
import Post from "./components/Post/Post";
import {useMemo, useState} from "react";
import EmptyBlock from "./components/EmptyBlock/EmptyBlock";


const DATA = [
    {
        id: 1,
        number: 1,
        title: "Введение в React",
        description: "Обзор библиотеки React, её основных концепций и принципов работы с компонентами."
    },
    {
        id: 2,
        number: 2,
        title: "Основы TypeScript",
        description: "Изучение системы типов TypeScript и её применение в современных веб-приложениях."
    },
    {
        id: 3,
        number: 3,
        title: "Tailwind CSS",
        description: "Утилитарный CSS-фреймворк для быстрой и гибкой стилизации интерфейсов."
    },
    {
        id: 4,
        number: 4,
        title: "Работа с хуками",
        description: "Глубокое погружение в useState, useEffect и кастомные хуки React."
    },
    {
        id: 5,
        number: 5,
        title: "Управление состоянием",
        description: "Сравнение подходов к глобальному управлению состоянием: Context API, Zustand, Redux."
    },
];


function App() {

    const [data, setData] = useState(DATA)
    const [filter, setFilter] = useState({sort: 'default', query: ''})

    console.log(filter)

    const sortedPosts = useMemo(() => {
        console.log('Сработал sortedPosts')
        if (filter.sort !== 'default') {
            return  [...data].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return data;
    },[data, filter.sort])

    const sortedAndFilteredPosts = useMemo(() => {
        console.log('Сработал sortedAndFilteredPosts');
        if (filter.query){
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
        }
        return sortedPosts
    },[sortedPosts, filter.query])

    return (
        <div className='page-container'>
            <Header/>
            <main className="main">
                <NewPostCard data={data} setData={setData}/>
                <FilterAndSearchCard filter={filter}
                                     setFilter={setFilter}
                                     defaultValue={'Сортировка по:'}
                                     options={[{value: 'title', name: 'По названию'}, {
                                         value: 'description',
                                         name: 'По описанию'
                                     }]}/>
                <div className="posts-list">
                    <div className="posts-header">
                        <div className="posts-heading">Посты</div>
                        <div className="posts-count">{data.length}</div>
                    </div>
                    {data.length === 0 ?
                        <EmptyBlock/>
                        : sortedAndFilteredPosts.map((post) => (
                            <Post post={post} key={post.id} data={data} setData={setData}/>
                        ))}

                </div>
            </main>
        </div>
    );
}

export default App;
