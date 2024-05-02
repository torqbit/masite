import appConfig from '../../app.config'
import './Project.css'
export default function Opensource({opensourcearray}){
    return(
        <>
        <section className="projects">
        <h2>Open Source Projects</h2>
            <div>
            {appConfig.opensourcedata.map((value,index) => (
            <div>
                <span>{value. spantxt}</span>
                <img src={value.imgsrc}/>
                <p>{value.paratxt}</p>
            </div>
        ))}
            </div>
      
        </section>
        </>
    )
}