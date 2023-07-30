import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='bg-indigo-500  overflow-hidden rounded-lg px-3 py-2'>
        <h3 className='text-white text-lg font-bold'>{project.projectName}</h3>
    </div>
  )
}

export default ProjectCard