import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Membercard.css'

const DynamicCardList = () => {
  const [cardsData, setCardsData] = useState([]);

  // Fetching JSON data for multiple cards
  useEffect(() => {
    fetch('../cardsData.json')  // Adjust the path to your JSON file
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  return (
    <div className="card-list">
      {cardsData.map(card => (
        <Card key={card.id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={card.image} alt="Card image" style={{width: '250px', height: '250px'}} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary" href={card.buttonLink}>
              {card.buttonText}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DynamicCardList;