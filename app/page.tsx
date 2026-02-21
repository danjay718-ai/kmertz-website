import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Itinerary from '@/components/Itinerary';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import LeadMagnet from '@/components/LeadMagnet';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Itinerary />
      <InquiryForm />
      <Footer />
      <LeadMagnet />
    </main>
  );
}
