import './Projects.css';
export default function Projects({projects}){
    return(
        <section className="projects">
            <h2>Open Source Projects</h2>
            <div>
                {projects.map((value,index)=>(
                    <div key={index}>
                        <span>{index+1}</span>
                        <img src={value.img}/>
                        <p><a href={value.link}>{value.name}</a></p>
                    </div>
                ))}
            </div>
        </section>
    )
}