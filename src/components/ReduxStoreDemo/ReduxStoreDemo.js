import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

import UserList from './components/UserList';
import User from './components/User';

// Switch is imported wrapped around routes so that we can remove /card/:user
// and just use /:user instead
// eg., originally it was <Route path='/card/:user' component={Card} />
// It just matches first match in the routes then stops rendering.
const ReduxStoreDemoApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={UserList} />
        <Route path="/user/:username" component={User} />
        <Route path="/:user" component={Card} />
      </Routes>
    </Router>
  );
};

export default ReduxStoreDemoApp;

// react-router-dom version 6.0.0 onwards
// Get only exact path '/' else it will render Home on every page.
// <Route exact path="/" component={Home} />
// <Route path='/templates' element={<TemplatesApp />} />

// <Router>
// 	<div className="App">
// 		<Navbar />
// 			<Route exact path='/' element={<Home />} />
// 			<Route path='/about' element={<About />} />
// 			<Route path='/contact' element={<Contact hello="World"/>} />
// 			<Route path='/:user' element={<Card />} />
// 			<Route path='/card' element={<Card name="Wedding Card" age="20"/>} />
// 			<Route path='/blog' element={<BlogCommentApp />} />
// 			<Route path='/hemisphere' element={<HemisphereApp />} />
// 			<Route path='/imagelist' element={<ImageListApp />} />
// 			<Route path='/imagelist' element={<ClockApp />} />
// 	</div>
// </Router>
