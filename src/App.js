import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())               
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (

        <div >
          {items.map(items => (
              <Card className="Card" key={items.id} >
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>{items.release_date}</Card.Text>
                  <Card.Text>
                    {items.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Rotten Tomatoes: {items.rt_score}</small>
                </Card.Footer>
              </Card>
          ))}
        </div>

      )
    }
  }
}

export default App;


