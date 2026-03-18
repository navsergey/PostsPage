import React from 'react';
import classes from "./NewPostModal.module.css";

const NewPostModal = ({setData, data, onClose}) => {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');


    const handleNewPost = () => {
        setData([...data, {id: data.length + 1, title: name, description: description}]);
        setName('');
        setDescription('');
        onClose();
    }

    return (
        <div className={classes.card} onClick={() => onClose()}>
            <div className={classes.cardContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.cardTitle}>
                    Новый пост
                    <button className={classes.closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={classes.formFields}>
                    <div className={classes.field}>
                        <label>Название
                            <input
                                className={classes.input}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                maxLength="50"
                            />
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
                            className={classes.btnCancel}
                            onClick={onClose}
                        >
                            Отмена
                        </button>
                        <button
                            className={classes.btnAdd}
                            onClick={handleNewPost}
                        >
                            +
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostModal;