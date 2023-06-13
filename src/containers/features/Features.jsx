import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Learning Communities',
    text: 'Users can join or create study groups based on specific programming languages, frameworks, or technologies. These communities serve as hubs for sharing resources, asking questions, and engaging in discussions related to a particular topic.',
  },
  {
    title: 'Real-time Chat',
    text: 'MyStudyClan offers a robust real-time chat feature that enables developers to connect with each other instantly. Users can engage in both private and group conversations, fostering collaboration and knowledge sharing.',
  },
  {
    title: 'Resource Sharing',
    text: 'The platform allows users to share articles, tutorials, code snippets, and other relevant resources with the community. This promotes continuous learning and helps developers stay updated with the latest industry trends.',
  },
  {
    title: 'Project Collaboration',
    text: 'MyStudyClan provides a dedicated space for developers to collaborate on projects. Users can form teams, assign tasks, and work together to build applications, contributing to their practical experience and portfolio',
  },
];

const Features = () => (
  <div className="MyStudyClan__features section__padding" id="features">
    <div className="MyStudyClan__features-heading">
      <h1 className="gradient__text">Connect with senior software engineers and accelerate your learning journey</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="MyStudyClan__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);
export default Features