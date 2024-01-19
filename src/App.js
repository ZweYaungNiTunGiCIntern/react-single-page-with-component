
import './App.css';
import Header from './Header.js'
import ImageTextSection from './ImageTextSection.js'
import ServiceSection from './ServiceSection.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
    {/* Header */}
      <Header />
      

    {/* Image and Text Section */}
      <ImageTextSection />

    {/* Service Section (Courses) */}
      <ServiceSection />

    {/* Footer */}
      <Footer />
  </div>
  );
}

export default App;
