import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-grow bg-white'>
        {/* Blank white space for content */}
      </main>

      <Footer />
    </div>
  );
}
