import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import MainItem from "../MainItem";
import {Button} from "react-bootstrap";


const NewsPage = () => {
    const location = useLocation();
    const {nevs} = location.state;

    // console.log(nevs);
    // nevs.newssubs.map((newssub, index) => (
    //     console.log("!!!", newssub)
    // ))

    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    const navigate = useNavigate();

    const handleClick = (id, newssub) => {
        navigate(`/news/edit/${id}`, {state: {newssub}});
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '80%'
            }}>
                <div>
                    <h2>{nevs.title}</h2>
                    <p>{nevs.endEvent}</p>
                    <p>{nevs.under}</p>
                    {showFullText && (
                        <div style={{
                            maxHeight: '300px',
                            overflowY: 'auto',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            marginTop: '20px'
                        }}>
                            <p>
                                {nevs.description}
                            </p>
                        </div>
                    )}
                    <button onClick={toggleFullText} style={{marginTop: '20px'}}>
                        {showFullText ? 'Скрыть текст' : 'Показать полный текст'}
                    </button>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginTop: '20px',
                        width: '80%'
                    }}>
                        <div style={{
                            display: 'grid',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}>
                            <div>
                                <h2 className="text-center">Основное</h2>
                            </div>
                            {
                                nevs.newssubs.map((newssub, index) => (
                                    <div style={{marginTop: '20px'}}>
                                        <h3>{newssub.title}</h3>
                                        <p>{newssub.sub_title}</p>
                                        <p>{newssub.main_text}</p>
                                        <p>{newssub.description}</p>
                                        <p>{newssub.under}</p>
                                        {localStorage.getItem("role") === "ADMIN" ?
                                            <Button variant="primary" onClick={() => {
                                                navigate(`/news/editText/${newssub.id}`, {state: {newssub}})
                                            }}>
                                                Редактировать текст {newssub.id}...
                                            </Button>
                                            :
                                            <div>

                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {localStorage.getItem("role") === "ADMIN" ?
                    <Button variant="primary" onClick={handleClick}>
                        Редактировать оглавление новости
                    </Button>
                    :
                    <div>

                    </div>
                }
            </div>
        </div>
    );
};

export default NewsPage;