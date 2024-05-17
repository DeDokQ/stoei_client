import "./assets/css/bootstrap.min.css"
import "./assets/css/default.css"
import "./assets/css/LineIcons.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/style.css"
import Button from "react-bootstrap/Button";

const test = () => {
    return (
        <div>
            <header class="header-area">
                <div id="home" class="header-hero bg_cover">
                    <div class="container">
                        <div class="">
                            <div class="">
                                <div class="header-content text-center">
                                    <h3 class="header-title">Спасибо, что пользуетесь нашим порталом!</h3>
                                    <p class="text">Точка IT - лучший среди худших информационных порталов, у нас вы
                                        найдете самые свежие новости!</p>
                                    <ul class="header-btn">
                                        <li><a class="main-btn btn-one" rel="nofollow"
                                               href="https://i.ytimg.com/vi/evgxDRJ4Dg0/maxresdefault.jpg">Подробнее</a>
                                        </li>
                                        <li><a class="main-btn btn-two video-popup"
                                               href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Промо ролик
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="call-to-action" class="call-to-action">
                <div class="container-fluid">
                    <div class="row justify-content-end">
                        <div class="col-lg-6">
                            <div class="call-action-content text-center">
                                <h2 class="call-title">Мы ищем новые таланты!</h2>
                                <p class="text">Если Вы интересуетесь IT и хотите проявить себя в этой области - то
                                    напишите нам.</p>
                                <div class="call-newsletter">
                                    <i class="lni-envelope"></i>
                                    <input type="text" placeholder="john@email.com"/>
                                    <Button type="submit">Отозваться</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact" class="contact-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-10">
                                <h4 class="title">Нашли ошибку? <br/>Напишите нам!</h4>
                                <p class="text">Мы всегда стараемся предоставлять исключительно достоверную информацию,
                                    однако и мы можем ошибаться!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact-form">
                                <form id="contact-form" action="assets/contact.php" method="post"
                                      data-toggle="validator">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="name" placeholder="Ваше имя"
                                                       data-error="Name is required." required="required"/>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="email" name="email" placeholder="Почта"
                                                       data-error="Valid email is required." required="required"/>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="subject"
                                                       placeholder="Название статьи / новости"
                                                       data-error="Subject is required." required="required"/>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="phone" placeholder="Вид ошибки"
                                                       data-error="Phone is required." required="required"/>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-group">
                                        <textarea placeholder="Ваше сообщение" name="message"
                                                  data-error="Please, leave us a message."
                                                  required="required"></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <p class="form-message"></p>
                                        <div class="col-md-12">
                                            <div class="single-form form-group text-center">
                                                <button type="submit" class="main-btn">Отправить</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer id="footer" class="footer-area">
                <div class="footer-widget">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="footer-logo-support d-md-flex align-items-end justify-content-between">
                                    <div class="footer-logo d-flex align-items-end">

                                        <ul class="social mt-30">
                                            <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                                            <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="footer-link">
                                    <h6 class="footer-title">Точка IT</h6>
                                    <ul>
                                        <li><a href="#">О нас</a></li>
                                        <li><a href="#">Контакты</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="footer-link">
                                    <h6 class="footer-title">Информация</h6>
                                    <ul>
                                        <li><a href="#">Новости</a></li>
                                        <li><a href="#">Статьи</a></li>
                                        <li><a href="#">Аккаунт</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-5">
                                <div class="footer-link">
                                    <h6 class="footer-title">Поддержка</h6>
                                    <ul>
                                        <li><a href="#contact">Support Center</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-7">
                                <div class="footer-newsletter">
                                    <h6 class="footer-title">Если Вам нужна помощь - оставьте Ваш Email</h6>
                                    <div class="newsletter">
                                        <form action="#">
                                            <input type="text" placeholder="Почта"/>
                                            <button type="submit"><i class="lni-angle-double-right"></i></button>
                                        </form>
                                    </div>
                                    <p class="text">На этом всё.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default test;