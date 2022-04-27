import React, { useState, useEffect } from 'react'
import ProjectStyle from './ProjectsStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import SearchInput from '../../components/InputField/InputField'
import Tag from '../../components/Tag/Tag'
import ProjectCard from '../../components/ProjectCard.js/ProjectCard'
import axios from "../../axios/axiosInstance"
import { motion } from 'framer-motion'
import Spinner from "../../components/Spinner/Spinner"

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
const Projects = () => {


    const [searchValue, setSearchValue] = useState("")
    const [showLoader, setLoader] = useState(false);

    const [project, setProject] = useState([])
    const [filterData, setFilterData] = useState([]);
    const [tags, setTags] = useState([]);

    const fetchProject = async () => {
        setLoader(true);
        try {
            const data = await axios.get("/project")
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
            const data = await axios.get("/tags")
            setTags(data.data.tagData.tags);
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert("Failed to fetch the tag data")
        }
    }

    useEffect(() => {
        fetchProject();
        fetchTags();
    }, [])

    const inputChangeHandler = (value) => {

        setSearchValue(value);
        // Check for title
        const updatedFilterData = project.filter(data => {
            console.log(data.title);

            if (data.title.toLowerCase().includes(value.toLowerCase())) {
                return data.title.toLowerCase().includes(value.toLowerCase())
            }
            return data.tag.includes(value.toUpperCase())
        })
        setFilterData(updatedFilterData);

    }


    const tagClickHandler = (tag) => {
        const clickedTag = tag.toUpperCase();
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
        const updateData = project.filter(value => selectedTag.some(tag => value.tag.includes(tag)));
        setFilterData(updateData);
    }
    return (
        <ProjectStyle as={motion.section}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={projectAnimate}>
            <SectionHeading isSecondary>PROJECTS</SectionHeading>
            <SearchInput input_type="search" placeholder="Search" inputchange={(value) => inputChangeHandler(value)} value={searchValue} />
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
                            />

                        })}
                    </div>}



        </ProjectStyle>
    )
}

export default Projects