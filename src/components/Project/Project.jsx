import './Project.css'
export default function Projects({projects}){
    return(
        <section className="projects" >
            <h2>Open Source Projects</h2>
            <div>
            {projects.map((value,index)=>(
                <div key={index}>
                    <span>{index+1}</span>
                    <img src={value.img}/>
                    <p>{value.name}</p>
                </div>
            ))} 
            </div>
        </section>
    )
}