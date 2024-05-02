import React from 'react';
import './Presentation.css';

export default function Presentation({ presentations }) {
    return (
        <section className="presentations">
            <h2>Presentations</h2>
            <div>
                {presentations.map((presentation, index) => (
                    <PresentationItem presentation={presentation} key={index} />
                ))}
            </div>
        </section>
    );
}

function PresentationItem({ presentation }) {
    return (
        <div>
            <div className="presentation-video">
                <img src={presentation.imgSrc} alt={presentation.title} />
                <img src={presentation.playBtnImgSrc} alt="Play" />
            </div>
            <div>
                <h4>{presentation.title}</h4>
                <p>{presentation.date}</p>
            </div>
        </div>
    );
}


// import React from 'react';
// import './Presentation.css';

// const Presentation = ({ presentations }) => {
//     return (
//         <section className="presentations">
//             <h2>Presentations</h2>
//             <div>
//                 {presentations.map((presentation, index) => (
//                     <div key={index}>
//                         <div className="presentation-video">
//                             <img src={presentation.imgSrc} alt={presentation.title} />
//                             <img src={presentation.playBtnImgSrc} alt="Play" />
//                         </div>
//                         <div>
//                             <h4>{presentation.title}</h4>
//                             <p>{presentation.date}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Presentation;