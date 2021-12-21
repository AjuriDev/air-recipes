import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollTo } from '../../../assets/js/hooks';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Filter from '../../Filter';
import Input from '../../_UI/Input';
import Modal from '../Modal';
import { search, filter } from '../../../assets/i/sprite';
import headerImg from '../../../assets/i/header-image.png';
import { setFilter } from '../../../store/actions/filter';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSearchQueryClear = () => {
    setSearchQuery('');
    dispatch(setFilter({ searchQuery: '' }));
  };

  const handleSearchQuerySubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter({ searchQuery }));
  };

  const toggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  const handleFilterShow = (e) => {
    e.preventDefault();

    toggleModal(true);
  };

  return (
    <>
      <header ref={headerEl} className="header">
        <Container>
          <div className="header__content">
            <h1 className="header__title">
              <Link to={AppRoute.ROOT.PATH}>Air Recipes</Link>
            </h1>
            <span className="header__subtitle">
              Best Recipes for Best People
            </span>
            <form
              className="header__search-bar"
              onSubmit={handleSearchQuerySubmit}
            >
              <Input
                value={searchQuery}
                type="text"
                onChange={handleSearchQueryChange}
                onClear={handleSearchQueryClear}
                placeholder="Search"
                icon={search}
                isClearable
              />
              <button
                className="header__show-filter btn _icon"
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

      {isModalOpen && (
        <Modal onToggle={toggleModal}>
          <Filter onSubmit={() => toggleModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default Header;
