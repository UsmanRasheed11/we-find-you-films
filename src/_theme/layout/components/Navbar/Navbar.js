import React from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarPage = () => {

  return (
    <div className="wrapper row1">
      <header id="header" className="">
        <Navbar expand="lg" className="d-flex flex-column justify-content-between text-white offset-md-2 p-md-0" collapseOnSelect>
          {/* className="navbar navbar-expand-lg text-white col-md-6 col-sm-12"> */}
          <Container className="py-0" fluid>

            <div id="logo">
              <h1><a href="/">findyourfilms</a></h1>

            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="mainav" className="mt-2 offset-md-3">
                <li className="mx-3" ><NavLink to="/">Home</NavLink></li>
                <li className="mx-3"><NavLink to="/movies">Movies</NavLink>

                </li>
                <li className="d-md-block">
                  <NavDropdown id="nav-dropdown-dark"
                    title="Top genre"
                    menuVariant="dark" className="mx-3">
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=action&runtime=100,&sort=user_rating,desc`}>Action</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=comedy&runtime=100,&sort=user_rating,desc`}>Comedy</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=thriller&runtime=100,&sort=user_rating,desc`}>Thriller</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=adventure&runtime=100,&sort=user_rating,desc`}>Adventure</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=rommantic&runtime=100,&sort=user_rating,desc`}>Rommantic</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=fantacy&runtime=100,&sort=user_rating,desc`}>Fantacy</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=horror&runtime=100,&sort=user_rating,desc`}>Horror</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=crime&runtime=100,&sort=user_rating,desc`}>Crime</NavDropdown.Item>
                    <NavDropdown.Item className="px-1" href={`/TopMoviesMainPage?genres=sci-fi&runtime=100,&sort=user_rating,desc`}>Science Fiction</NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="mx-3"><NavLink to="/wishlist">Watchlist</NavLink></li>
                <li className="mx-3"><NavLink to="/cinemas">Watch in Cinema</NavLink></li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
    </div>
  );
};
