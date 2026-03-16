import React from 'react';
import classes from "./NewPostCard.module.css";

const NewPostCard = ({setData, data}) => {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');


    const handleNewPost = () => {
        setData([...data, {id: data.length + 1, title: name, description: description}]);
        setName('');
        setDescription('');
    }

    return (
        <div className={classes.card}>
            <div className={classes.cardTitle}>Новый пост</div>
            <div className={classes.formFields}>
                <div className={classes.field}>
                    <label>Название
                        <input
                            className={classes.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"/>
                    </label>
                </div>
                <div className={classes.field}>
                    <label>Описание
                        <textarea
                            className={classes.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div className={classes.formFooter}>
                    <button
                        className={classes.btnAdd}
                        onClick={() => handleNewPost()}>
                        +
                        Добавить пост
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPostCard;