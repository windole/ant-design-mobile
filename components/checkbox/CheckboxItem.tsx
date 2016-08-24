import * as React from 'react';
import Checkbox from './Checkbox';
import List from '../list/index';
import CheckboxItemProps from './CheckboxItemPropsType';
import styles from './style/index';

const ListItem = List.Item;
const refCheckbox = 'checkbox';

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {

  handleClick = () => {
    let checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    let {style, defaultChecked, checked, disabled, children, extra, line, onChange} = this.props;

    return (<ListItem
      style={style}
      onClick={this.handleClick}
      line={line}
      extra={extra}
      thumb={<Checkbox
        ref={refCheckbox}
        style={styles.checkboxItemCheckbox}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</ListItem>);
  }
}
