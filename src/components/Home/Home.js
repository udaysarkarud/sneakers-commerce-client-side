import React from 'react';
import BannerInfo from './BannerInfo/BannerInfo';
import BannerSection from './BannerSection/BannerSection';
import BlogSection from './BlogSection/BlogSection';
import ContactSection from './ContactSection/ContactSection';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HighlightedFeatures from './HighlightedFeatures/HighlightedFeatures';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <BannerSection />
            <HighlightedFeatures />
            <FeaturedProducts />
            <BannerInfo />
            <ContactSection />
            <BlogSection />
            <ReviewSection />
        </div>
    );
};

export default Home;