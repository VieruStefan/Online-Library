// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// const Header = () => {
//   return (
//     <div className="Header">
//       <Navbar>
//         <Container>
//           <Navbar.Brand href="/">Home</Navbar.Brand>
//           <Nav className="me-auto">
//             {/* {window.location.pathname  !== '/' &&(
//               <Nav.Link href="/books">Back</Nav.Link>
//             )} */}
//             <Nav.Link href="/books">Books</Nav.Link>
//             <Nav.Link href="/settings">Settings</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       {/* <h1>Our Header</h1>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <div>
//         <Link to="/books"> Books</Link>
//       </div> */}
//     </div>
//   );
// };

// export default Header;

import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { getCurrentTheme } from './ThemeSwitcher';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=> {
  const currentTheme = getCurrentTheme();
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', storedTheme);

  }, []);
  return (
      <div className='body'>
        <Navbar className={currentTheme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {/* {window.location.pathname  !== '/' &&(
              <Nav.Link href="/books">Back</Nav.Link>
            )} */}
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <script>
        const storedTheme = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', storedTheme);
      </script>
      </div>
  );
}

export default Header;