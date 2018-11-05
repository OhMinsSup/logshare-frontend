import * as React from 'react';
import * as classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MdTrendingUp, MdAccessTime, MdContentCopy } from 'react-icons/md';
import SidebarNavItem from '../SidebarNavItem';

const styles = require('./Sidebar.scss');
const cx = classNames.bind(styles);

type Props = {
  url: string;
};

const Sidebar: React.SFC<Props> = ({ url }) => (
  <div className={cx('sidebar')}>
    <div className={cx('sidebar-top')}>
      <div className={cx('logo-section')}>
        <Link to="/" className={cx('logo')}>
          <span>LogShare</span>
        </Link>
      </div>
      <div className={cx('primary')}>
        <ul className={cx('list')}>
          <SidebarNavItem
            text="최신"
            icon={<MdAccessTime />}
            active={url === `/recent`}
            to={`/recent`}
          />
          <SidebarNavItem
            text="인기"
            icon={<MdTrendingUp />}
            active={url === `/trending`}
            to={`/trending`}
          />
          <SidebarNavItem
            text="시리즈"
            icon={<MdContentCopy />}
            active={url === `/seris`}
            to={`/seris`}
          />
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;
