// import React, { useState } from 'react';
// import './services.css';
// import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

// const Services = () => {
//     const [toggleState, setToggleState] = useState(0);

//     const toggleTab = (index) => {
//         setToggleState(index);
//     };

//     return (
//     <section className="services section" id="services">
//         <h2 className="section__title">Services</h2>
//         <span className="section__subtitle">Create</span>
    
//         <div className="services__container container grid">
//             <div className="services__content">
//                 <div>
//                     <HiOutlineClipboardList className="services__icon" />
//                     <h3 className="services__title">Web <br />Developer</h3>
//                 </div>
//                 <span className="services__button" onClick={() => toggleTab(1)}>
//                     View More
//                     <HiOutlineArrowSmRight className="services__button-icon" />
//                 </span>
//                 <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
//                     <div className="services__modal-content">
//                         <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
//                         <h3 className="services__modal-title">Developer</h3>
//                         <p className="services__modal-description">
//                         Proficient in web development, currently enhancing skills and expanding knowledge.
//                         </p>
//                         <ul className="services__modal-services grid">
//                             <li className="services__modal-service">
//                                 <HiOutlineCheckCircle className="services__modal-icon" />
//                                 <p className="services__modal-info">
//                                     Web page development
//                                 </p>
//                             </li>
//                             <li className="services__modal-service">
//                                 <HiOutlineCheckCircle className="services__modal-icon" />
//                                 <p className="services__modal-info">
//                                     Integrate creative colloboration
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="services__content">
//                 <div>
//                     <HiOutlineClipboardList className="services__icon" />
//                     <h3 className="services__title">Problem<br />Solver</h3>
//                 </div>
//                 <span className="services__button" onClick={() => toggleTab(2)}>
//                     View More
//                     <HiOutlineArrowSmRight className="services__button-icon" />
//                 </span>
//                 <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
//                     <div className="services__modal-content">
//                         <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
//                         <h3 className="services__modal-title">Problem-Solver</h3>
//                         <p className="services__modal-description">
//                         Solved 500+ DSA problems across platforms like Codeforces, CodeChef, and LeetCode.
//                         </p>
//                         <ul className="services__modal-services grid">
                           

//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="services__content">
//                 <div>
//                     <HiOutlineClipboardList className="services__icon" />
//                     <h3 className="services__title">Other<br />Activites</h3>
//                 </div>
//                 <span className="services__button" onClick={() => toggleTab(3)}>
//                     View More
//                     <HiOutlineArrowSmRight className="services__button-icon" />
//                 </span>
//                 <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
//                     <div className="services__modal-content">
//                         <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
//                         <h3 className="services__modal-title">Activities</h3>
//                         <p className="services__modal-description">
//                         Passionate about both video games and various outdoor sports activities.
//                         </p>
//                         <ul className="services__modal-services grid">
                            
                            
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     </section>
//   );
// }

// export default Services;