import React, { useState, useEffect } from 'react'
import SkillStyle from './SkillStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import Button from "../../components/Button/Button"
import { motion } from "framer-motion";
import SkillBox from '../../components/SkillBox/SkillBox';
import SearchInput from '../../components/InputField/InputField';
import axios from "../../axios/axiosInstance"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Spinner from "../../components/Spinner/Spinner";

const skillAnimate = {
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

const header = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}

const AdminSkill = () => {

    const { isAuth } = useSelector(state => state.authentication);
    const navigate = useNavigate();
    const [showLoader, setLoader] = useState(false);

    const [title, setTitle] = useState("");
    const [percentage, setPercentage] = useState("");
    const [skills, setSkills] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState("");

    const fetchSkills = async () => {
        setLoader(true);
        try {
            const data = await axios.get(`${process.env.REACT_APP_ADMIN}skills`, header)
            setSkills(data.data.skills);
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("FAILEd TO LOAD DATA");
        }
    }

    useEffect(() => {
        if (isAuth) {
            fetchSkills()

        }
        else {
            navigate("/")
        }
    }, [isAuth, navigate])

    const titleChangeHandler = (val) => {
        setTitle(val);
    }
    const percentageChangeHandler = (val) => {
        setPercentage(val);
    }

    const createHandler = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}skill`, {
                title,
                percentage,
            }, header);
            fetchSkills();
            alert("Successfully updated");
            setLoader(false);

        }
        catch (error) {
            setLoader(false);
            alert("FAILED TO UPDATE");
        }

    }

    const editButtonHandler = (title, percentage, id) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        if (id === editId) {
            setEdit(!edit);
            setTitle("");
            setPercentage("");
            setEditId("");
        }
        else {
            setEdit(true);
            setTitle(title);
            setPercentage(percentage);
            setEditId(id);
        }

    }
    const deleteButtonHandler = async (id) => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}delete`, {
                id
            }, header)
            fetchSkills()
            alert("Successfully deleted")
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("FAILED TO DELETE");
        }
    }

    const updateHandler = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}edit`, {
                id: editId,
                title,
                percentage
            }, header);
            fetchSkills();
            alert("Successfully updated");
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failed to update");
        }

    }

    return (
        <SkillStyle as={motion.section}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={skillAnimate}>
            <SectionHeading isSecondary>SKILL</SectionHeading>
            <div className="admin_skill_update">
                <SearchInput className="admin_skill_update_input"
                    type="text"
                    inputchange={(e) => titleChangeHandler(e)}
                    value={title}
                    placeholder="TITLE" />
                <SearchInput
                    type="text"
                    className="admin_skill_update_input"
                    inputchange={(e) => percentageChangeHandler(e)}
                    value={percentage}
                    placeholder="PERCENTAGE" />
            </div>

            {
                edit ?
                    <Button clickHandler={updateHandler}>UPDATE</Button>
                    :
                    <Button clickHandler={createHandler}>CREATE</Button>
            }


            {
                showLoader ? <Spinner />
                    :
                    <div className="skill_box_container">
                        {skills.map((value, index) => {
                            return <SkillBox
                                key={value._id}
                                title={value.title}
                                index_number={index + 1}
                                percentage={value.percentage}
                                id={value._id}
                                edit_button_handler={(title, percentage, id) => editButtonHandler(title, percentage, id)}
                                delete_button_handler={(id) => deleteButtonHandler(id)}
                            />
                        })}
                    </div>}
        </SkillStyle>
    )
}

export default AdminSkill