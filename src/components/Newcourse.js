import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup' 
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

const Newcourse = ({ name, url,
     handler, createCourseFnc }) => {
    return (
        <Form onSubmit={createCourseFnc}>
        <FormGroup controlId="createCourseName">
          <FormLabel>Name</FormLabel>
          <FormControl type="text" name="courseName" value={name} onChange={handler} placeholder="e.g. Java programming" />
        </FormGroup>
      
        <FormGroup controlId="createCourseUrl">
          <FormLabel>Url</FormLabel>
          <FormControl type="text" name="courseUrl" value={url} onChange={handler} placeholder="https://hhmoodle.haaga-helia.fi/course/view.php?id=23298" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    )
}

export default Newcourse