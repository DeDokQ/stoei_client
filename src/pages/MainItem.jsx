import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MainItem = ({ nevs }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/news/${nevs.id}`, { state: { nevs } });
    };

    return (
        <div style={{ margin: 'auto', maxWidth: '600px', textAlign: 'center', marginBottom: "5%"}}>
            <div
                className="bg-image hover-overlay ripple shadow-2-strong rounded-5 waves-light"
                style={{
                    cursor: 'pointer',
                    width: '100%',
                    paddingTop: '60%', // Устанавливаем соотношение сторон для сохранения пропорций картинки
                    background: 'url(https://mdbcdn.b-cdn.net/img/new/slides/080.webp)',
                    backgroundSize: 'cover',
                }}
                onClick={handleClick}
            ></div>
            <div className="text-center mt-3">
                <h4>
                    <strong>{nevs.title}</strong>
                </h4>
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    Дата публикации: {nevs.uploadDate}
                </span>
                <p className="text-muted">
                    {nevs.description}
                </p>
                <Button variant="primary" onClick={handleClick}>
                    Подробнее...
                </Button>
            </div>
        </div>
    );
};

export default MainItem;