
  import { Modal,Button } from 'react-bootstrap';
  const AddMovies = ({toggle , handleModal,newMovie,handleAddMovie}) => {
      return (
          <div>
               <Modal
        show={toggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>movie</h4>
       <input Type ="text" placeholder="Add Movie Title"
        value={newMovie.title}
         title= "title"
         onChange={handleAddMovie}  />
       <input Type ="text" placeholder="Add Movie Image"
        value={newMovie.image}
        title= " image"
         onChange={handleAddMovie} />
       <input Type ="text" placeholder="Add Movie Date " 
       value={newMovie.date}
       title= " date"
        onChange={handleAddMovie} />
       <input Type ="number" placeholder="Add Movie rate" 
       value={newMovie.rate} 
       title= " rate"
       onChange={handleAddMovie} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModal}>Add</Button>
        </Modal.Footer>
      </Modal>
          </div>
      )
  }
  
  export default AddMovies
  