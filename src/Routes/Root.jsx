<<<<<<< HEAD
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import PagesPromotionForm from '../pages/Promotion/Form/Form';
import PagesPromotionList from '../pages/Promotion/List/List';
import PagesPromotionSearch from '../pages/Promotion/Search/Search';

const Root = () => {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" component={PagesPromotionList}  /> */}
          {/* <Route path="/" element={<PagesPromotionList />} /> */}
          <Route path="/" element={<PagesPromotionSearch />} />
          <Route path="/create" element={<PagesPromotionForm />} />
          <Route path="/edit/:id" element={<PagesPromotionForm />} />
        </Routes>
      </Router>
    );
  };
  
  export default Root;
=======
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import PagesPromotionForm from 'pages/Promotion/Form/Form';
// import PagesPromotionList from '../pages/Promotion/List/List';
import PagesPromotionSearch from 'pages/Promotion/Search/Search';

  const Root = () =>{
    return(
    <Router>
        <Routes>
            {/* <Route path="/" element={<PagesPromotionList />} />               */}
            <Route path="/" element={<PagesPromotionSearch />} />              
            <Route path="/create" element={<PagesPromotionForm />} />
            <Route path="/edit/:id" element={<PagesPromotionForm />} />
        </Routes>
    </Router>
    );
  }

  export default Root;

      
>>>>>>> ab9830dc1e36f21e14dc7b9186de86b3bc617624
