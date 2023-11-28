// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Testimonials from '../components/web/testimonials';
import Hero from '../components/web/Hero';
import Faqs from '../components/web/Faqs';
import FeatureSection1 from '../components/web/FeatureSection1';
import FeatureSection2 from '../components/web/FeatureSection2';
import Help from '../components/web/Help';
import Clients from '../components/web/Clients';
import Link from 'next/link';
import Head from 'next/head';




export default function Home() {
  return (
    <>
    <Head>
        <title>AI-Driven Email Personalization Platform - Boost Engagement & Sales</title>
        <meta name="description" content="Experience the future of email marketing with our AI-powered personalization platform. Elevate your outreach with tailored content, increase engagement rates, and drive sales effectively. Perfect for businesses seeking to harness the power of AI for smarter email strategies." />
      </Head>
    <div>
      {/* Top Bar */}
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
        Join Our Webinar:          <br className="sm:hidden" />
        Mastering Sales Personalization Strategies for 2024         </p>
        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="/webinar"
        >
Join Webinar        </a>
      </div>
      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection1 />
    
      <FeatureSection2 />


<Testimonials />
<Faqs />
<Help />
      <Footer />
    </div>
    </>
  );
}
