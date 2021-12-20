import {useState} from 'react';
import {Link} from 'react-router-dom';
import Container from '../Container';
import Input from '../../_UI/Input';
import { search, filter } from '../../../assets/i/sprite';
import headerImg from '../../../assets/i/header-image.png';
import {AppRoute} from '../../../assets/js/const';

import './Header.scss';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <h1 className="header__title"><Link to={AppRoute.ROOT.PATH}>Air Recipes</Link></h1>
          <span className="header__subtitle">Best Recipes for Best People</span>
          <form className="header__search-bar">
            <Input
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search"
              icon={search}
              isClearable
            />
            <button className="header__show-filters btn _icon" type="button">{filter}</button>
          </form>
          <div className="header__image">
            <img src={headerImg} alt="Delicious breakfast" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
