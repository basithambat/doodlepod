import ResponsiveDoodlepod from './components/ResponsiveDoodlepod';
import ContactUs from './pages/ContactUs';
import Safety from './pages/Safety';
import Privacy from './pages/Privacy';
import DeliveryReturns from './pages/DeliveryReturns';
import Terms from './pages/Terms';
import OurStory from './pages/OurStory';

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  if (pathname === '/our-story') return <OurStory />;
  if (pathname === '/contact') return <ContactUs />;
  if (pathname === '/safety') return <Safety />;
  if (pathname === '/privacy') return <Privacy />;
  if (pathname === '/delivery-returns') return <DeliveryReturns />;
  if (pathname === '/terms') return <Terms />;
  return <ResponsiveDoodlepod />;
}
