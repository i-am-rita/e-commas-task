import Addidas from '../components/Addidasmen/Addidas';
import Grid from '../components/Homepage/Container2';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Latest from '../components/Latest/Latest'
import Featured from '../components/Featured/Featured';
import React from 'react'

export default function Home() {
    return (
        <div>
     <Hero />
     <Grid />
     {/* <Addidas/> */}
     <Services />
     <Latest />
     <Featured />
        </div>
    )
}
