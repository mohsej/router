import React from "react"
import {Container,Navbar,Form,Button} from 'react-bootstrap';
import "./MainNavbar.css";
import ReactStars from "react-rating-stars-component";

function MainNavbar({search,handleSearch,rating,handleRating,handleModal}) {
    return (
        <div className="Nav">
             <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      {'  '}
      <Button className="button" onClick={handleModal}>AddMovies</Button>
      </Navbar.Brand>
        </Container>
        <Form className="d-flex"
        >
        <input 
        id="imp"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
        <Button className="buts" variant="outline-success">Search</Button> 
         
       <div className="star"> <ReactStars 
         count={5}
         size={24} 
         value={rating}
         onChange={handleRating}
         isHalf={false}
         emptyIcon={<i className="far fa-star"></i>}
         halfIcon={<i className="fa fa-star-half-alt"></i>}
         fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700" />
          
          </div> 
      </Form>
     
        </Navbar>
    


        </div>
    )
}

export default MainNavbar
