/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import LogoLeftImage from '../../../src/assets/images/grouplogo_logo_left.svg';

import LogoRightImage from '../../../src/assets/images/grouplogo_logo_right.svg';
import LogoMainTextImage from '../../../src/assets/images/grouplogo_logo_main_text.svg';
import { styled } from '@mui/material/styles';

const GroupLogo = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `37.5px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const LogoLeft = styled('img')({
  height: `auto`,
  width: `30px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LogoRight = styled('img')({
  height: `auto`,
  width: `19.5px`,
  position: `absolute`,
  left: `10px`,
  top: `2px`,
});

const LogoMainText = styled('img')({
  height: `auto`,
  width: `189px`,
  position: `absolute`,
  left: `36px`,
  top: `7px`,
});

function Group1(props) {
  return (
    <GroupLogo className={props.className}>
      <LogoLeft src={LogoLeftImage} loading="lazy" alt={'logo-left'} />
      <LogoRight src={LogoRightImage} loading="lazy" alt={'logo-right'} />
      <LogoMainText
        src={LogoMainTextImage}
        loading="lazy"
        alt={'logo-main-text'}
      />
    </GroupLogo>
  );
}

export default Group1;