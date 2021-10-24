/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS } from "../../constants";

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomDialogOverlay>
      <CustomDialogContent>
        <ModalButton onClick={onDismiss}>
          <VisuallyHidden></VisuallyHidden>
          <Icon size={24} id="close" />
        </ModalButton>
      <ModalNav>
        <NavLink active={true} href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </ModalNav>
      <ModalFooter>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </ModalFooter>
      </CustomDialogContent>
      </CustomDialogOverlay>
  );
};

const CustomDialogOverlay = styled(DialogOverlay)`
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: hsla(0, 0%, 0%, 0.45);
`;

const CustomDialogContent = styled(DialogContent)`
  display: flex;
  height: 100%;
  width: 80%;
  margin-left: auto;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 22px 32px 32px;
`

const ModalButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const ModalNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Link = styled.a`
  text-decoration: none;
`
const NavLink = styled(Link)`
  color: ${p => p.active ? COLORS.secondary : COLORS.gray["900"]};
  font-weight: 600;
  font-size: ${18 / 16}rem;
`;

const FooterLink = styled(Link)`
  color: ${COLORS.gray["700"]};
  font-weight: 500;
  font-size: ${14/16}rem;
`

const ModalFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`



export default MobileMenu;
