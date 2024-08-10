// Components
import Container from '@container';
import Header from '@features/home/components/Header';
import HowItWorks from '@features/home/components/HowItWorks';

export default function Home() {
  return (
    <>
      <Container id='home-container' setBgColor>
        <Header />
      </Container>
      <Container id='how-it-works-container'>
        <HowItWorks />
      </Container>
    </>
  );
}
