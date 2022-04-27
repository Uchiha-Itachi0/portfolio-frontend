import React, { useState, useEffect } from 'react'
import ProjectStyle from './ProjectsStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import SearchInput from '../../components/InputField/InputField'
import Tag from '../../components/Tag/Tag'
import ProjectCard from '../../components/ProjectCard.js/ProjectCard'
import Button from "../../components/Button/Button"
import axios from "../../axios/axiosInstance"
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'


// Initialy the selected tag will be an empty array
const selectedTag = [];

const projectAnimate = {
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
const AdminProjects = () => {

    const { isAuth } = useSelector(state => state.authentication);
    const navigate = useNavigate();
    const [showLoader, setLoader] = useState(false);
    const [project, setProject] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [filterData, setFilterData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState([]);
    const [writeTags, setWriteTags] = useState("");

    const fetchProject = async () => {
        setLoader(true);
        try {
            const data = await axios.get(`${process.env.REACT_APP_ADMIN}projects`, header)
            setProject(data.data.data);
            setFilterData(data.data.data)
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Couldn't get project");
        }
    }

    const fetchTags = async () => {
        setLoader(true);
        try {
            const data = await axios.get(`${process.env.REACT_APP_ADMIN}tags`, header)
            setTags(data.data.tagData.tags);
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failed to fetch the tag data")
        }
    }
    useEffect(() => {
        if (isAuth) {
            fetchProject();
            fetchTags();
        }
        else {
            navigate("/")
        }

    }, [isAuth, navigate])

    const inputChangeHandler = (value) => {
        setSearchValue(value);
        // Check for title
        const updatedFilterData = project.filter(data => {
            if (data.title.toLowerCase().includes(value.toLowerCase())) {
                return data.title.toLowerCase().includes(value.toLowerCase())
            }
            return data.tag.includes(value.toUpperCase())
        })
        setFilterData(updatedFilterData);
    }


    const tagClickHandler = (tag) => {
        const clickedTag = tag.toUpperCase().trim();
        // Check that if the selectedTag array is empty then we have to display the entire data

        // Check to see that if the selected tag is selected again then we have to diable that tag
        // which means we have to remove the data related to that tag
        if (selectedTag.includes(clickedTag)) {
            const tagIndex = selectedTag.indexOf(clickedTag);
            selectedTag.splice(tagIndex, 1);
        }
        else {
            selectedTag.push(clickedTag);
        }

        if (selectedTag.length <= 0) {
            return setFilterData(project)
        }

        // Displaing the data from the selectedTag
        // Here some property of an array comes very handy.
        const updateData = project.filter(value => selectedTag.some(tagData => {
            console.log("This is value tag", value.tag)
            console.log("THis is tag data", tagData)
            return value.tag.includes(tagData)
        }));
        setFilterData(updateData);
    }

    const titleChangeHandler = (val) => {
        setTitle(val);
    }
    const linkChangeHandler = (val) => {
        setLink(val);
    }
    const descriptionChangeHandler = (val) => {
        setDescription(val);
    }
    const tagChangeHandler = (val) => {
        setTag(val);
    }
    const allTagChangeHandler = (val) => {
        setWriteTags(val);
    }

    const editButtonHandler = (title, link, desc, tag, id) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        if (id === editId) {
            setEdit(!edit);
            setTitle("");
            setLink("");
            setDescription("");
            setTag("");
            setEditId("");
        }
        else {
            setEdit(true);
            setTitle(title);
            setLink(link);
            setDescription(desc);
            setTag(tag);
            setEditId(id)
        }
    }
    const deleteButtonHandler = async (id) => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}project-delete`, {
                id
            }, header)
            fetchProject();
            alert("Successfully deleted the data")
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failer to delete the data");
        }
    }

    const createHandler = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}project`, {
                title,
                link,
                desc: description,
                tag
            }, header)
            fetchProject();
            alert("Successfully created");
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failed to create project")
        }
    }

    const updateHandler = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}project-edit`, {
                id: editId,
                title,
                desc: description,
                link,
                tag
            }, header);
            fetchProject();
            alert("Successfully updated")
            setLoader(false);
        } catch (error) {
            setLoader(false);
            alert("Failed to update")
        }
    }

    const updateTags = async () => {
        setLoader(true);
        try {
            await axios.post(`${process.env.REACT_APP_ADMIN}tags`, {
                tags: writeTags
            }, header)
            fetchTags();
            alert("Successfully updated the tags");
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failed to update the tags");
        }
    }



    return (
        <ProjectStyle as={motion.section}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={projectAnimate}>
            <SectionHeading isSecondary>PROJECTS</SectionHeading>
            <div className="admin_project_container">
                <SearchInput type="text"
                    inputchange={(val) => titleChangeHandler(val)}
                    value={title}
                    placeholder="TITLE" />
                <SearchInput type="text"
                    inputchange={(val) => linkChangeHandler(val)}
                    value={link}
                    placeholder="LINK" />
                <textarea
                    className="admin_project_desc"
                    onChange={(e) => descriptionChangeHandler(e.target.value)}
                    value={description}
                    placeholder="DESCRIPTION"></textarea>
                <SearchInput type="text"
                    inputchange={(val) => tagChangeHandler(val)}
                    value={tag}
                    placeholder="TAGS FOR THIS PROJECT" />
                {
                    edit ?
                        <Button clickHandler={updateHandler}>UPDATE</Button>
                        :
                        <Button clickHandler={createHandler}>CREATE</Button>
                }
            </div>
            <SearchInput input_type="search" placeholder="Search" inputchange={(value) => inputChangeHandler(value)} value={searchValue} />
            <SearchInput type="text"
                className="admin_all_tags"
                inputchange={(val) => allTagChangeHandler(val)}
                value={writeTags}
                placeholder="TAGS FOR ALL PROJECT" />
            <Button clickHandler={updateTags}>UPDATE TAGS</Button>


            <div className="project_tags">
                {tags.map((tag, index) => {
                    return <Tag
                        handleclick={() => tagClickHandler(tag)}
                        key={index}
                    >{tag}
                    </Tag>
                })}
            </div>
            {
                showLoader ? <Spinner />
                    :
                    <div className="project_project_container">
                        {filterData.map((value, index) => {
                            return <ProjectCard key={value._id}
                                project_title={value.title}
                                project_desc={value.desc}
                                project_number={index + 1}
                                button_link={value.link}
                                showButton
                                id={value._id}
                                tag={value.tag}
                                edit_button_handler={(title, link, desc, tag, id) => editButtonHandler(title, link, desc, tag, id)}
                                delete_button_handler={(id) => deleteButtonHandler(id)}
                            />

                        })}
                    </div>}



        </ProjectStyle>
    )
}

export default AdminProjects