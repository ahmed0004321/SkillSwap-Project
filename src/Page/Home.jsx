import React from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from './SkillCard';

const Home = () => {
    const skillData = useLoaderData();
    console.log(skillData);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                skillData.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
            }
        </div>
    );
};

export default Home;