import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollTo } from '../../../assets/js/hooks';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Input from '../../_UI/Input';
import { search, filter } from '../../../assets/i/sprite';
import headerImg from '../../../assets/i/header-image.png';
import { openModal } from '../../../store/actions/modal';
import { AppRoute, StoreNameSpace } from '../../../assets/js/const';
import getNumericDiapasonConverter from '../../../assets/js/utils/getNumericDiapasonConverter';
import { gsap } from 'gsap';

import './Header.scss';

const HeaderHeight = {
  MIN: 32,
  MAX: 60,
};

const SCROLL_DISTANCE = 30;

const Header = () => {
  const dispatch = useDispatch();

  const { remInPixels } = useSelector(
    (state) => state[StoreNameSpace.RESPONSIVE].document
  );

  const [searchQuery, setSearchQuery] = useState('');

  const headerEl = useRef(null);
  const imageEl = useRef(null);

  useEffect(() => {
    const convertScrollToHeightInPixels = getNumericDiapasonConverter(
      [HeaderHeight.MIN, HeaderHeight.MAX],
      SCROLL_DISTANCE
    );

    const handleWindowScroll = () => {
      // TODO нужно додумать оптимизацию скролла чтобы высота хедера изменялась при ресайзе окна
      // if (
      //   window.scrollY > SCROLL_DISTANCE * remInPixels &&
      //   headerEl.current.clientHeight / remInPixels <= HeaderHeight.MIN
      // )
      //   return;

      const scrollToHeightRate = convertScrollToHeightInPixels(window.scrollY);

      let calcHeight = Math.round(
        HeaderHeight.MAX * remInPixels - scrollToHeightRate
      );

      calcHeight =
        calcHeight / remInPixels < HeaderHeight.MIN
          ? HeaderHeight.MIN * remInPixels
          : calcHeight;

      gsap.set(headerEl.current, {
        height: calcHeight,
      });

      gsap.set(imageEl.current, {
        y: -((HeaderHeight.MAX * remInPixels - calcHeight) / 10),
      });
    };

    handleWindowScroll();
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [remInPixels]);

  useScrollTo(headerEl.current);

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  const handleFilterShow = (e) => {
    e.preventDefault();

    dispatch(
      openModal({
        render() {
          return <div>test</div>;
        },
      })
    );
  };

  return (
    <header ref={headerEl} className="header">
      <Container>
        <div className="header__content">
          <h1 className="header__title">
            <Link to={AppRoute.ROOT.PATH}>Air Recipes</Link>
          </h1>
          <span className="header__subtitle">Best Recipes for Best People</span>
          <form className="header__search-bar">
            <Input
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search"
              icon={search}
              isClearable
            />
            <button
              className="header__show-filters btn _icon"
              type="button"
              onClick={handleFilterShow}
            >
              {filter}
            </button>
          </form>
          <div ref={imageEl} className="header__image">
            <img src={headerImg} alt="Delicious breakfast" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
