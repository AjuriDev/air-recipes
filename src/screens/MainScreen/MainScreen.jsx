import Header from '../../components/_layout/Header';
import Container from '../../components/_layout/Container';
import RecipesBlock from '../../components/RecipesBlock';

import './MainScreen.scss';

const MainScreen = () => {
  return (
    <>
      <Header />

      <Container>
        <RecipesBlock />
      </Container>
    </>
  );
};

export default MainScreen;
