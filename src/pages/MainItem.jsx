import {observer} from "mobx-react-lite";
import {Card, CardBody, Col} from "react-bootstrap";
import {CardHeader} from "@mui/material";
import {useNavigate} from "react-router-dom";

const MainItem = observer(({nevs}) => {
        const navigate = useNavigate();

        const handleClick = () => {
            navigate(`/news/${nevs.id}`, {state: {nevs}});
        };

        return (
            <Col md={3} onClick={handleClick}>
                <Card>
                    <CardHeader>
                        {nevs.title}
                    </CardHeader>
                    <CardBody>
                        {nevs.description}
                    </CardBody>
                </Card>
            </Col>
        );
    }
)

export default MainItem;