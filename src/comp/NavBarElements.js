import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav=styled.nav`
 background:#000;
 height:80px;
 display:flex;
 justify-content:space-between;
 padding:0.5rem calc((100vw-1000px)/2);
 z-index:10;
`

export const NavLink =styled(Link)`
  color:#fff;
  display:flex;
  aligen-items:center;
  text-aligen:center;
  text-decoration:none;
  padding:0 1rem;
  height:100%;
  cursor:pointor
`

export const NavMenu =styled.div`
 display:flex;
 aligen-items:center;
 margin-right:-24px;
`