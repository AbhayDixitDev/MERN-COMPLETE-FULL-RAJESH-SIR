import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search=()=>{
    return (
        <>
          <h1> Search page</h1>
          <Form className="d-flex" style={{width:"50%",margin:"0 auto"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          

        </>
    )
}

export default Search;