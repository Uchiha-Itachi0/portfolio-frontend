import React, { useState, useEffect } from 'react'
import LoginFormContainer from './loginStyle'
import InputField from '../../components/InputField/InputField'
import TwoCircleButton from '../../components/TwoCircleButton/TwoCircleButton'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import axios from "../../axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux"
import { authentication } from '../../redux/action/user'
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const Login = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(authentication(true))
        }
        else {
            dispatch(authentication(false))
        }
    }, [dispatch]);

    const { isAuth } = useSelector(state => state.authentication);
    const [showLoader, setLoader] = useState(false);
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (email) => {
        setemail(email);
    };
    const passwordHandler = (password) => {
        setPassword(password);
    };

    const buttonClickedHandler = async () => {
        setLoader(true);
        try {
            const data = await axios.post(`${process.env.REACT_APP_ADMIN}login`, {
                email,
                password
            });
            if (data.status !== 200) {
                setLoader(false);
                alert("Failed to Login. Check your email and password");
            }
            localStorage.setItem("token", data.data.token);
            dispatch(authentication(true));
            setLoader(false);
            alert("Logged in successfully");
            navigate("/")

        }
        catch (error) {
            setLoader(false);
            alert(error.message, error.status)

        }
    }
    const logOutHandler = () => {
        localStorage.removeItem("token");
        navigate("/")

    }


    return (
        <LoginFormContainer>
            <div className="login_container">
                {
                    isAuth ?
                        <TwoCircleButton
                            buttonClicked={logOutHandler}
                            text="Log out" className="logout_button" />
                        :
                        <>
                            {
                                showLoader ? <Spinner />
                                    :
                                    <SectionHeading isSecondary>LOGIN</SectionHeading>}
                            <form className="login_form">
                                <InputField input_type="text" placeholder="email"
                                    inputchange={(value) => emailHandler(value)} value={email} />
                                <InputField input_type="password" placeholder="Password"
                                    inputchange={(value) => passwordHandler(value)} password={password} />
                                <TwoCircleButton
                                    buttonClicked={buttonClickedHandler}
                                    className="login_button" text="Login" />
                            </form>
                        </>}
            </div>
        </LoginFormContainer>
    )
}

export default Login