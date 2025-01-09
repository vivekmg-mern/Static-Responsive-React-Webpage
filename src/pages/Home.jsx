import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Giraffe from '/src/assets/giraffe-1371203_1280.jpg'
import play from '/src/assets/play-1744790_1280.jpg'
import cars from '/src/assets/cars-2060420_1280.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';


const Home = () => {
  return (
<div id='hm'>
<Carousel>
      <Carousel.Item>
      <img style={{height:'600px', width:'100%' }} src={Giraffe} alt="" />
        <Carousel.Caption>
          <h3>Ride-On Toys</h3>
          <p>We have variety of Ride on Toys for your walking Baby</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'600px', width:'100%' }} src={play} alt="" />
        <Carousel.Caption>
          <h3>Wooden Toys</h3>
          <p>Lets go to the Olden Days, our wooden toys are smoothly finished and durable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'600px', width:'100%' }} src={cars} alt="" />
        <Carousel.Caption>
          <h3>Heavy Duty Toys</h3>
          <p>
            We have wide range of toys which resemble heavy duty off road vehicles
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><hr /><br />

{/* Cards */}
<h4>Explore our toy products...</h4>
<div  className='row d-flex flex-row p-2 bd-highlight justify-content-center align-self-center m-5 '>
    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px', height:'auto', border:'solid pink'}}>
      <Card.Img variant="top" src="/src/assets/fire-fighters-1045906_640.jpg" />
      <Card.Body>
        <Card.Title>Toy Car</Card.Title>
        <Card.Text>
          Alloy Metal Pull Back Die Cast car-Red-Black....
        </Card.Text>
        <Button className='ms-5'  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px', height:'auto', border:'solid pink'  }}>
      <Card.Img variant="top" src="/src/assets/toy-2127789_640.jpg" />
      <Card.Body>
        <Card.Title>Crane Truck</Card.Title>
        <Card.Text>
        Premium Plastic Pull Back Crane attached truck-Red-Yellow....
        </Card.Text>
        <Button className='ms-5'  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

<div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px',height:'auto', border:'solid pink'  }}>
      <Card.Img variant="top" src="/src/assets/model-car-5086785_640.jpg" />
      <Card.Body>
        <Card.Title>Toy car-Topless</Card.Title>
        <Card.Text>
        Alloy Metal Pull Back Die Cast car-Pink-White....
        </Card.Text>
        <Button className='ms-5'  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px',height:'auto', border:'solid pink'  }}>
      <Card.Img variant="top" src="/src/assets/minion-972908_640.jpg" />
      <Card.Body>
        <Card.Title>Minion Fun Toy</Card.Title>
        <Card.Text>
          Premium Plastic Minion-Fun Toy-Red-Yellow....
        </Card.Text>
        <Button className='ms-5'  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px', height:'auto', border:'solid pink'  }}>
      <Card.Img variant="top" src="/src/assets/teddy-bear-524251_640.jpg" />
      <Card.Body>
        <Card.Title>Teddy Bear</Card.Title>
        <Card.Text>
          Teddy Bear made with premium material-White....
        </Card.Text>
        <Button className='ms-5'  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px',height:'auto', border:'solid pink'}}>
      <Card.Img style={{height:'185px'}} variant="top" src="/src/assets/chess-3467512_640.jpg" />
      <Card.Body >
        <Card.Title>Chess Set</Card.Title>
        <Card.Text>
          Chess: Made of wood. Polished and colored....
        </Card.Text>
        <Button className='ms-5' variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px',height:'auto', border:'solid pink'}}>
      <Card.Img style={{height:'185px'}} variant="top" src="/src/assets/childrens-toys-7179337_640.jpg" />
      <Card.Body >
        <Card.Title>Hot Wheels</Card.Title>
        <Card.Text>
          Hot Wheels: Premium Plastic Toys-Multi Colors....
        </Card.Text>
        <Button className='ms-5' variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>


    <div className='col-lg'>
    <Card style={{ width: '18rem', margin:'10px',height:'auto', border:'solid pink'}}>
      <Card.Img style={{height:'185px'}} variant="top" src="/src/assets/knitting-1614283_640.jpg" />
      <Card.Body >
        <Card.Title>Knitted Teddys</Card.Title>
        <Card.Text>
          Knitted Teddys: made with premium material-Multi Color....
        </Card.Text>
        <Button className='ms-5' variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </div>

    {/* Footer */}
    <div id='hmt'><Footer/></div>
    
    </div>
  )
}

export default Home