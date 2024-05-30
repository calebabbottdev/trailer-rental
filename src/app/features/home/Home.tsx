// Components
import Container from '@container';
import Header from '@features/home/components/Header';
import SearchByType from '@features/home/components/SearchByType';

export default function Home() {
  return (
    <>
      <Container id='home-container' setBgColor>
        <Header />
      </Container>
      <Container id='search-by-type-container'>
        <SearchByType />
      </Container>
    </>
  );
}
