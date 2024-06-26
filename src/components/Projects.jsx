import ProjectItem from './ProjectItem';
import projectsData from '../projectsData';

export default function Projects(){
    return(
        <>
            <section className="project-section" id="project-section">
                <h1 className="project-section-title">Contributed Works</h1>
                <div className="project-container">
                    {projectsData.map(project=>{
                        return(
                            <ProjectItem key={project.title} photo={project.photo} title={project.title} description={project.description}
                            tools={project.tools} code={project.code} demo={project.demo}>

                            </ProjectItem>
                        )
                    })}
                </div>
            </section>

        </>
    )
}