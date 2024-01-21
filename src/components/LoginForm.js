import '../styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.js";


const LoginForm = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const {t} = useTranslation();
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");

        console.log("Submitted Username:", username);
        console.log("Submitted Password:", password);

        auth.signin(username, password, () => {
            navigate(from, { replace: true });
        });
    }


    return (
        <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-sm-5">
                    <div className="card">
                        <div className="card-header form-header text-center">
                            <h3>{t('sign-in')}</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        E-mail:
                                    </label>
                                    <input
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        id="username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        {t('password')}:
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>
                                <div className="text-center sign-button-container">
                                    <button type="submit"
                                            className="btn btn-block d-grid gap-2 col-6 mx-auto sign-button">
                                        {t('sign-in')}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-3 text-center form-label-extras">
                                <p>{t('no-account-question')} <a className="text-decoration-none href-color"
                                                                 href="/login/#">{t('register')}</a></p>
                            </div>

                            <hr className="hr-text gradient" data-content={t('or')}/>

                            <div className="d-flex justify-content-center padding-bottom-24">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <a className="btn sign-button" href="/login/#">
                                        <FontAwesomeIcon className="padding-right-8"
                                                         icon={faGoogle}/> {t('sign-in')} {t('with-google')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;