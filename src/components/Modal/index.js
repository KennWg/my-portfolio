import React from "react";

function Modal({currentProject, onClose}) {

    const {name, techs, description, index, projectLink, githubLink} = currentProject;

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <h4 className="modalTechs">{techs}</h4>
                <img className="modalImage" src={require(`../../assets/cards/card${index}.png`)} alt={`${name}`}></img>
                <p className="pt-4">{description}</p>
                <div className="modalLinks d-flex justify-content-center pb-3">
                    <a href={projectLink} className="px-2" target="_blank" rel="noreferrer noopener">Click for Project</a>
                    <a href={githubLink} className="px-2" target="_blank" rel="noreferrer noopener">Click for Github</a>
                </div>
                <div className="buttonWrapper w-100 justify-content-center d-flex">
                    <button type="button" className="text-align-center" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;