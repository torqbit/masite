import './Project.css'
export default function Project({projectarray}){
    return(
        <section className="projects">
        <h2>Open Source Projects</h2>
            <div>
            {projectarray.map((value,index) => (
            <div>
                <span>{index+1}</span>
                <img src={value.img}/>
                <p>{value.name}</p>
            </div>
        ))}
            </div>
      
        </section>
    )
}