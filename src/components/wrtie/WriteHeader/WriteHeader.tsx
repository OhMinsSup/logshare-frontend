import * as React from 'react';
import * as classNames from 'classnames/bind';
import { MdArrowBack } from 'react-icons/md';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdImage } from 'react-icons/io';

const styles = require('./WriteHeader.scss');
const cx = classNames.bind(styles);

const WriteHeader: React.StatelessComponent<{
  onGoBack(): void;
  onSubmitBox(): void;
}> = ({ onGoBack, onSubmitBox }) => (
  <div className={cx('write-header')}>
    <MdArrowBack className={cx('back-icon')} onClick={onGoBack} />
    <div className={cx('actions')}>
      <button
        className={cx('upload-image')}
        onClick={() => console.log('뒤로 가랏')}
      >
        <IoMdImage />
        <div className={cx('btn-text')}>업로드</div>
      </button>
      <div
        className={cx('button', 'submit')}
        onClick={() => console.log('뒤로 가랏')}
      >
        작성하기
      </div>
      <div className={cx('more')} onClick={onSubmitBox}>
        <FaEllipsisV className={cx('ignore-click-outside')} />
      </div>
    </div>
  </div>
);

export default WriteHeader;
