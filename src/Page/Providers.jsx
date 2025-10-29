import React from 'react';
import { useLoaderData } from 'react-router';
import ProviderDetails from './ProviderDetails';
import Marquee from 'react-fast-marquee';

const Providers = () => {
    const provider = useLoaderData();
    // console.log(provider);
    return (
        <div>
            <h1 className='font-bold text-2xl my-5'>Top Rated Skill Providers</h1>
            <hr  className='mb-5'/>
            <div>
                <Marquee pauseOnHover gradient={false} speed={50}>
                {
                    provider.map(prov => <ProviderDetails key={prov.providerId} prov={prov}></ProviderDetails>)
                }
                </Marquee>
            </div>
        </div>
    );
};

export default Providers;