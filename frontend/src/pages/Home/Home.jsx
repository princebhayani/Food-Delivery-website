import React, { useState } from 'react'
import "./Home.css";
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

function Home() {
    const [category, setCategory] = useState("All");
    
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            Home
        </div>
    )
}

export default Home