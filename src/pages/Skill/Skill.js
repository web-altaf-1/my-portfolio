import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div>
            <center>
                <div id="SkillBox">
                    <center><h2 >My Skills</h2></center>
                    
                    <div className="SkillBar" title='HTML'>
                        <div id="Skill-HTML" >
                            <span className="Skill-Area ">HTML</span>
                            <span className="PercentText ">95%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='CSS'>
                        <div id="Skill-CSS">
                            <span className="Skill-Area ">CSS/CSS3</span>
                            <span className="PercentText ">80%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='Bootstrap'>
                        <div id="Skill-bootstrap">
                            <span className="Skill-Area ">Bootstrap</span>
                            <span className="PercentText ">75%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='Tailwind'>
                        <div id="Skill-Tailwind">
                            <span className="Skill-Area ">Tailwind </span>
                            <span className="PercentText ">60%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='Javascript'>
                        <div id="Skill-JS">
                            <span className="Skill-Area ">Javascript</span>
                            <span className="PercentText ">70%</span>
                        </div>
                    </div>

                    

                    <div className="SkillBar" title='ReactJs'>
                        <div id="Skill-React">
                            <span className="Skill-Area ">ReactJs</span>
                            <span className="PercentText ">75%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='NodeJs'>
                        <div id="Skill-NodeJs">
                            <span className="Skill-Area ">NodeJs </span>
                            <span className="PercentText ">25%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='ExpressJs'>
                        <div id="Skill-Express">
                            <span className="Skill-Area ">ExpressJs </span>
                            <span className="PercentText ">50%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='MongoDB'>
                        <div id="Skill-MongoDb">
                            <span className="Skill-Area ">MongoDb </span>
                            <span className="PercentText ">80%</span>
                        </div>
                    </div>

                    <div className="SkillBar" title='Git/Github'>
                        <div id="Skill-Github">
                            <span className="Skill-Area ">Git/Github</span>
                            <span className="PercentText ">65%</span>
                        </div>
                    </div>

                </div>
            </center>
        </div>
    );
};

export default Skill;