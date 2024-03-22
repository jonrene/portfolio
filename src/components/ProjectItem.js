import React from 'react';

export default function ProjectItem(props){
    return(
        <>
            <div className="project-item">
                <img className="project-image" src={props.photo} alt='project'/>
                <div className="project-info">
                    <h3 className="project-title">{props.title}</h3>
                    <p className="project-description">{props.description}</p>
                    <span className="project-tools">Tools used: {props.tools}</span>
                    <div className="project-buttons-container">
                        <a  className="project-button" href={props.code} target="_blank">Code</a>
                        <a  className="project-button" href={props.demo} target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        </>
    )
}