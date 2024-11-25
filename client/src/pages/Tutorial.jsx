import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const tutorials = [
  {
    id: 1,
    title: 'Full-Body Workout Routine',
    description: 'A step-by-step guide to a complete full-body workout.',
    videoUrl: 'https://www.youtube.com/embed/O1V3-wvF250',
  },
  {
    id: 2,
    title: 'Core Strengthening Exercises',
    description: 'Learn the best exercises to build core strength.',
    videoUrl: 'https://www.youtube.com/embed/Rx0oUM0qgQE',
  },
  {
    id: 3,
    title: 'Stretching for Flexibility',
    description: 'Improve your flexibility with these simple stretches.',
    videoUrl: 'https://www.youtube.com/embed/Yzm3fA2HhkQ',
  },
  {
    id: 4,
    title: 'HIIT Workout for Fat Loss',
    description: 'Burn calories quickly with this high-intensity interval training.',
    videoUrl: 'https://www.youtube.com/embed/ml6cT4AZdqI',
  },
];

const TutorialsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-center mb-4">Workout Tutorials</h1>
      
      {/* Grid Layout */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {tutorials.map((tutorial) => (
          <Col key={tutorial.id}>
            <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card.Body>
                <div className="video-container" style={{ marginBottom: '1rem' }}>
                  <iframe
                    width="100%"
                    height="200"
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {tutorial.title}
                </Card.Title>
                <Card.Text>{tutorial.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TutorialsPage;
