import React from 'react';
import LogoGroupImage from '../../assets/images/NavBar_logo_group.svg';
import NavbarHamburgerImage from '../../assets/images/NavBar_navbar_hamburger.png';
import { styled } from '@mui/material/styles';
import useNavBar from './useNavBar';

const ScreenDesktop = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `50px`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `6px 24px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const NavbarLeftSide = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const NavbarLogo = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const LogoGroup = styled('img')({
  height: `auto`,
  width: `228px`,
  margin: `0px`,
});

const NavbarRightSide = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const NavbarHamburger = styled('img', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  height: `20px`,
  width: `24px`,
  margin: data.currentVariant === 'ScreenMobile' ? `0px` : `0px 0px 0px 30px`,
}));

const Home = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Amarante`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: data.currentVariant === 'ScreenMobile' ? `0px 0px 0px 30px` : `0px`,
}));

const Gallery = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Amarante`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 30px`,
});

const Shop = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Amarante`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 30px`,
});

const Location = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Amarante`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 30px`,
});

const NavbarButton = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundColor: `rgba(0, 0, 255, 1)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent:
    data.currentVariant === 'ScreenMobile' ? `space-between` : `center`,
  alignItems: `center`,
  padding: `8px 20px`,
  boxSizing: `border-box`,
  width: `99px`,
  margin: `0px 0px 0px 30px`,
  overflow: `hidden`,
}));

const Schedule = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Amarante`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

function NavBar(props) {
  const { data } = useNavBar();

  return (
    <ScreenDesktop className={props.className}>
      <NavbarLeftSide>
        <NavbarLogo>
          <LogoGroup src={LogoGroupImage} loading="lazy" alt={'logo-group'} />
        </NavbarLogo>
      </NavbarLeftSide>
      <NavbarRightSide>
        {data.currentVariant === 'ScreenMobile' && (
          <NavbarHamburger
            data={data}
            src={NavbarHamburgerImage}
            loading="lazy"
            alt={'navbar-hamburger'}
          />
        )}
        {!(data.currentVariant === 'ScreenMobile') && (
          <Home data={data}>{`Home`}</Home>
        )}
        {!(data.currentVariant === 'ScreenMobile') && (
          <Gallery>{`Gallery`}</Gallery>
        )}
        {!(data.currentVariant === 'ScreenMobile') && <Shop>{`Shop`}</Shop>}
        {!(data.currentVariant === 'ScreenMobile') && (
          <Location>{`Location`}</Location>
        )}
        {!(data.currentVariant === 'ScreenMobile') && (
          <NavbarButton data={data}>
            <Schedule>{`Schedule`}</Schedule>
          </NavbarButton>
        )}
      </NavbarRightSide>
    </ScreenDesktop>
  );
}

export default NavBar;
