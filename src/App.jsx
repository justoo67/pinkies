import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CakeCategories from './components/CakeCategories';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import CakeCategory from './components/pages/CakeCategory';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CakeCategories />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cakes/birthday"
              element={
                <CakeCategory
                  title="Birthday Cakes"
                  description="Celebrate special moments with our custom birthday cakes"
                  images={[
                    '/images/birthday-cake-1.jpg',
                    '/images/birthday-cake-2.jpg',
                    '/images/birthday-cake-3.jpg',
                    '/images/birthday-cake-4.jpg',
                  ]}
                  features={[
                    'Custom designs for any age',
                    'Various flavors available',
                    'Personalized messages',
                    'Fresh ingredients',
                  ]}
                />
              }
            />
            <Route
              path="/cakes/wedding"
              element={
                <CakeCategory
                  title="Wedding Cakes"
                  description="Elegant and stunning wedding cakes for your big day"
                  images={[
                    '/images/wedding-cake-1.jpg',
                    '/images/wedding-cake-2.jpg',
                    '/images/wedding-cake-3.jpg',
                    '/images/wedding-cake-4.jpg',
                  ]}
                  features={[
                    'Elegant designs',
                    'Multiple tiers available',
                    'Custom flavors',
                    'Delivery and setup',
                  ]}
                />
              }
            />
            <Route
              path="/cakes/cupcakes"
              element={
                <CakeCategory
                  title="Cupcakes"
                  description="Delicious cupcakes in various flavors and designs"
                  images={[
                    '/images/cupcakes-1.jpg',
                    '/images/cupcakes-2.jpg',
                    '/images/cupcakes-3.jpg',
                    '/images/cupcakes-4.jpg',
                  ]}
                  features={[
                    'Multiple flavors',
                    'Custom decorations',
                    'Perfect for events',
                    'Freshly baked',
                  ]}
                />
              }
            />
            <Route
              path="/cakes/fruit"
              element={
                <CakeCategory
                  title="Fruit Cakes"
                  description="Rich and moist fruit cakes for any occasion"
                  images={[
                    '/images/fruit-cake-1.jpg',
                    '/images/fruit-cake-2.jpg',
                    '/images/fruit-cake-3.jpg',
                    '/images/fruit-cake-4.jpg',
                  ]}
                  features={[
                    'Rich fruit flavors',
                    'Moist texture',
                    'Perfect for celebrations',
                    'Fresh ingredients',
                  ]}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
