import NavDropdown from "react-bootstrap/NavDropdown";
import * as React from "react";

const myProfile = () => {
    return (
        <section id="about" className="about_area pt-70 pb-120">
            <div id="home" className="header_hero">
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-lg-6">
                            <div className="header_hero_content mt-45">
                                <h5 className="header_sub_title wow fadeInUp" data-wow-duration="1.3s"
                                    data-wow-delay="0.2s">
                                    Добрый день, уважаемый пользовать
                                </h5>
                                <h2 className="header_title wow fadeInUp" data-wow-duration="1.3s"
                                    data-wow-delay="0.5s">
                                    {localStorage.getItem("name")}
                                </h2>
                                <br/>

                                <span className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                    Спасибо, что выбрали наш портал! На данный моменты Вы находитесь на странице личного профиля. Здесь не так много функций, однако в будущем их станет куда больше!
                                </span>
                                <br/>
                                <br/>

                                <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                                    Ваша почта: {localStorage.getItem("email")}
                                </p>
                                {(localStorage.getItem("role")) === "ADMIN" ?
                                    <div>
                                        <br/>
                                        <h3>Вы - Администратор!</h3>
                                        <NavDropdown.Item href="/news/newNew"
                                                          variant="primary">Написать новость!</NavDropdown.Item>
                                    </div>
                                    :
                                    <div>
                                        <br/>
                                        <NavDropdown.Item href="/news/News"
                                                          variant="primary">Новости</NavDropdown.Item>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default myProfile;