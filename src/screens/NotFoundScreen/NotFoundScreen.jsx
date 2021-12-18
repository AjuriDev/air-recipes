import { Link } from 'react-router-dom';
import { AppRoute } from '../../assets/js/const';

import './NotFoundScreen.scss';

const NotFoundScreen = () => {
  return (
    <div className="not-found">
      <h2 className="container__title">Page not found</h2>
      <Link to={AppRoute.ROOT.PATH} className="not-found__back btn _filled">
        Go to the main
      </Link>
    </div>
  );
};

export default NotFoundScreen;
