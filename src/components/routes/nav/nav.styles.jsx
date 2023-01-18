import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: inherit;
  width: auto;
  padding: 7.5px;
  border-radius: 5px;
`
export const NavLinks = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
  