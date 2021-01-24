import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Pizzas</SidebarLink>
            <SidebarLink to='/'>Extras</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'> Order it Now</SidebarRoute>
        </SideBtnWrap>
        </SidebarContainer>

            
     
    );
};

export default Sidebar; 
