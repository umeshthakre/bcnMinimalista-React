import { Control, LocalForm } from "react-redux-form";
import { Label, Button, Row, Col } from 'reactstrap';

const CollabForm = props => {
    return(
        <LocalForm
            onSubmit={(values) => this.handleSubmit(values)}
            model="collabForm"
          >
            <div className="form-group">
              <Label htmlFor="name">Name</Label>
              <Control.text
                model=".name"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="phone">Phone</Label>
              <Control.text
                model=".phone"
                id="phone"
                name="phone"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="email">Email</Label>
              <Control.text
                model=".email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="message">Enter your message here</Label>
              <Control.textarea
                model=".message"
                id="message"
                name="message"
                rows="6"
                className="form-control"
              />
            </div>
            <Row>
              <Col>
                <Button type="submit" color="primary" className="btn-success">
                  Send Feedback
                </Button>
              </Col>
            </Row>

          </LocalForm>
    )
}

export default CollabForm