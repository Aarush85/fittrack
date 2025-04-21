import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoSection() {
  return (
    <div
    style={{
      maxHeight: '100vh', // Set maximum height to viewport height
      overflowY: 'auto', // Enable vertical scrolling
      padding: '1rem', // Add some padding for aesthetics
    }}
  >
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {/* Video 1 */}
      <Card style={{ width: '45%', marginBottom: '2rem' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>Full-Body Workout Routine</Card.Title>
          <div
            style={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio for the video
              height: 0,
              overflow: 'hidden',
              maxWidth: '100%',
              marginBottom: '1rem',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/O1V3-wvF250" // Replace with actual video link
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
          <Card.Text>
          A step-by-step guide to a complete full-body workout.
          </Card.Text>
          {/* <Button variant="primary">Watch More</Button> */}
        </Card.Body>
      </Card>

      {/* Video 2 */}
      <Card style={{ width: '45%', marginBottom: '2rem' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>Core Strengthening Exercises</Card.Title>
          <div
            style={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio for the video
              height: 0,
              overflow: 'hidden',
              maxWidth: '100%',
              marginBottom: '1rem',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/IR0yV_3DfBo" // Replace with actual video link
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
          <Card.Text>
          Learn the best exercises to build core strength.
          </Card.Text>
          {/* <Button variant="primary">Watch More</Button> */}
        </Card.Body>
      </Card>



      <Card style={{ width: '45%', marginBottom: '2rem' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>Stretching for Flexibility</Card.Title>
          <div
            style={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio for the video
              height: 0,
              overflow: 'hidden',
              maxWidth: '100%',
              marginBottom: '1rem',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/Yzm3fA2HhkQ" // Replace with actual video link
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
          <Card.Text>
          Improve your flexibility with these simple stretches.
          </Card.Text>
          {/* <Button variant="primary">Watch More</Button> */}
        </Card.Body>
      </Card>



      <Card style={{ width: '45%', marginBottom: '2rem' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>HIIT Workout for Fat Loss</Card.Title>
          <div
            style={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio for the video
              height: 0,
              overflow: 'hidden',
              maxWidth: '100%',
              marginBottom: '1rem',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/ml6cT4AZdqI" // Replace with actual video link
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
          <Card.Text>
            Burn calories quickly with this high-intensity interval training.
          </Card.Text>
          {/* <Button variant="primary">Watch More</Button> */}
        </Card.Body>
      </Card>

    </div>
    </div>
  );
}

export default VideoSection;
