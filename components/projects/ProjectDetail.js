import React from 'react'

const  ProjectDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className ='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                <span className='card-title'>Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.      </p>                                  
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Dawood Shamim</div>
                    <div>27 Jan 2020</div>                    
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
