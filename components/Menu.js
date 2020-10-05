import React, { useState } from 'react';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import "../style.css";


 const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="fixed-top">
            <Container>
                <NavbarBrand className="logo"><img src="/logo.png" className="logo" alt="Logo Tipo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/#inicio">Início</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#servico">Serviços</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#mercadoria">Mercadorias</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className="rany">Rany Silva</NavbarText>
                </Collapse>
            </Container>    
        </Navbar>
    )
 }

 export default Menu;