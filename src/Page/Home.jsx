import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import SkillCard from './SkillCard';
import Works from './Works';

const Home = () => {
    const skillData = useLoaderData();
    // console.log(skillData);
    return (
        <div>
            <h1 className='font-bold text-2xl my-3'>Popular Skills</h1>
            <hr  className='mb-5'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    skillData.map(skill => <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='my-10'>
                <Works></Works>
            </div>
        </div>
    );
};

export default Home;