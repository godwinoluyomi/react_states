import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Christiano Ronaldo',
        bio: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d\'Or awards, [note 3]a record three UEFA Best Player in Europe, and four European Golden Shoes, the most by a European player.He has won 34 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League.Ronaldo holds the records for most appearances(183), goals(140) and assists(42) in the Champions League, goals in the European Championship(14), international goals(128) and international appearances(205).He is one of the few players to have made over 1, 200 professional career appearances, the most by an outfield player, and has scored over 850 official senior career goals for club and country, making him the top goalscorer of all time.',
        imgSrc: './images/ronaldo.jpg',
        profession: 'Footballer',
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;


    return (
      <div>
        <NavBar />

        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Button variant="primary" onClick={this.handleToggleShow}>Toggle Show</Button>
              <p>Time since mount: {timeSinceMount} seconds</p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>


        {show && (
          <div>

            <Container>
              <Row>
                <Col md={2}></Col>
                <Col md={3}>
                  <Card >
                    <Card.Img variant="top" src={person.imgSrc} alt={person.fullName} />
                  </Card>
                </Col>
                <Col md={5}>
                  <Card >
                    <Card.Body>
                      <Card.Title>{person.fullName} </Card.Title>
                      <Card.Text> Profession: {person.profession} </Card.Text>
                      <Card.Text style={{ textAlign: "justify" }}>{person.bio} </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Container>

          </div>
        )}

      </div>
    )
  }
}

export default App