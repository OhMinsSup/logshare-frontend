import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'src/store/modules';
import { Dispatch, bindActionCreators } from 'redux';
import { baseCreators } from 'src/store/modules/base';
import CommonMenu from 'src/components/base/CommonMenu';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

class CommonMenuContainer extends React.Component<Props> {
  public onClick = () => {
    const { BaseActions } = this.props;

    BaseActions.setCommonMenu(false);
  };

  public componentDidUpdate(preProps: Props) {
    const { BaseActions } = this.props;

    if (this.props.width >= 890) {
      BaseActions.setCommonMenu(false);
    }
  }

  public render() {
    const { menu, nextUrl } = this.props;
    if (!menu) return null;

    return (
      <CommonMenu visible={nextUrl ? 'visible' : ''} onClick={this.onClick} />
    );
  }
}

const mapStateToProps = ({ base, auth }: StoreState) => ({
  width: base.window.width,
  menu: base.common_menu.visible,
  nextUrl: auth.nextUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  BaseActions: bindActionCreators(baseCreators, dispatch),
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CommonMenuContainer);
