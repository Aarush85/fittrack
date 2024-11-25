import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Sample array of blog data (this can be dynamic from an API or database)
const blogData = [
  {
    title: "Keto vs Low-Carb Diet: Key Differences You Should Know ",
    imageUrl: "https://www.anytimefitness.co.in/wp-content/uploads/2024/10/featured-image-keto-vs-low-carbs.jpg",
    description: "Keto and Low-carb diets are popular among people, especially those who are trying to lose weight quickly. There is an ongoing trend, i.e. “Keto vs Low-carb diet” among fitness enthusiasts, they are analyzing the trend practically. While many individuals think that these concepts seem pretty similar or they are altogether a single type of diet, let us tell you that they are different at many levels.  ",
    link: "https://www.anytimefitness.co.in/keto-vs-low-carb-diet-key-differences/"
  },
  {
    title: "Walking vs. Running: Which is Better for Fat Loss? ",
    imageUrl: "https://www.anytimefitness.co.in/wp-content/uploads/2024/10/Ft-image-walking-vs-running.jpg",
    description: "Considered good for cardiovascular health, walking and running are both perfect kinds of exercises to get fit. Runners always adore the activity’s intensity and walkers believe it is an activity good for overall health. However, if we specifically talk about weight loss, there can be a proper analysis regarding walking vs running. Not only this, but there are also several deciding factors for whether one should choose to run or walk for their fat loss journey. Let us discuss some basics first!  ",
    link: "https://www.anytimefitness.co.in/walking-vs-running-which-is-better-for-fat-loss/"
  },
  {
    title: "Exercise in the Morning vs. Evening: Benefits, Drawbacks, and Optimal Timing",
    imageUrl: "https://www.anytimefitness.co.in/wp-content/uploads/2024/10/featured-image-morning-vs-evening.jpg",
    description: "Whether performed in the day or night, exercise indeed does good for our body. However, we always find it difficult to decide whether to go to the gym in the morning or evening. There can be many reasons behind it, like a busy work schedule and social life among others. The debate, Exercise in morning vs evening, is ever going. Nonetheless, let’s just try to make things simple here!  ",
    link: "https://www.anytimefitness.co.in/exercise-in-the-morning-vs-evening-benefits-drawbacks/"
  },
  {
    title: "How Physical Activity Boosts Mental Health and Well-Being?  ",
    imageUrl: "https://www.anytimefitness.co.in/wp-content/uploads/2024/09/featured-image-physical-health.jpg",
    description: "There’s no denying the fact that exercise is essential for our physical health and mental well-being. Being physically active is crucial for everyone, be it for kids, adults, or elderly individuals. It is a lifesaver that promotes mental health and well-being. Thus, we can say that exercise and mental health are co-related.One should not find a specific reason to exercise,  ",
    link: "https://www.anytimefitness.co.in/how-physical-activity-boosts-mental-health-and-well-being/"
  },
];

// ];

function BlogCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
      {blogData.map((blog, index) => (
        <Card key={index} style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Card.Img 
            variant="top" 
            src={blog.imageUrl} 
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} 
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>{blog.title}</Card.Title>
            <Card.Text style={{ fontSize: '1rem', color: '#666' }}>
              {blog.description}
            </Card.Text>
            <Button variant="primary" href={blog.link} style={{ borderRadius: '20px' }}>
              Read more
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BlogCards;
