import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Button from '../../components/Button/Button'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import AboutStyle from './AboutStyle'
import axios from "../../axios/axiosInstance";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from "../../components/Spinner/Spinner"

const aboutAnimate = {
    initial: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    animate: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}
const AdminAbout = () => {

    const { isAuth } = useSelector(state => state.authentication);
    const navigate = useNavigate();

    const [about, setAbout] = useState("");
    const [showLoader, setLoader] = useState(false);
    const fetchAbout = async () => {
        setLoader(true);
        try {
            const data = await axios.get(`${process.env.REACT_APP_ADMIN}about`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setAbout((data.data.about[0].about));
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert(error.message);
        }

    }
    useEffect(() => {
        if (isAuth) {
            fetchAbout();
        }
        else {
            navigate("/")
        }

    }, [isAuth, navigate]);

    const editHandler = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}about`, {
                about
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setLoader(false);
            alert("Updated Successfully");
        }
        catch (error) {
            setLoader(false);
            alert("Failed to update");
        }

    }

    const changeHandler = (e) => {
        setAbout(e.target.value);
    }

    return (
        <AboutStyle as={motion.div}
            animate="animate"
            initial="initial"
            exit="exit"
            variants={aboutAnimate}>
            <SectionHeading isSecondary>ABOUT</SectionHeading>
            <div className="admin_about_controller">
                <Button clickHandler={editHandler}>UPDATE</Button>
            </div>
            {
                showLoader ? <Spinner />
                : 
                <textarea onChange={(e) => changeHandler(e)} value={about}></textarea>
            }
            <p className="about_footer">Interested in working togather</p>
            <a href="mailto:anubhav008shukla@gmail.com" className="about_link">Drop a note</a>
        </AboutStyle>
    )
}

export default AdminAbout