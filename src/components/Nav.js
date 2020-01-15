import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Image from 'react-bootstrap/Image'
import kidePicture from '../img/kide_app.png'
import lukkariPicture from '../img/lukkarikone.png'
import vdiPicture from '../img/vdi.png'
import outlookPicture from '../img/outlook.png'
import moodlePicture from '../img/moodle.jpg'
import peppiTestPicture from '../img/peppi_test.png'
import myyPicture from '../img/myysearch.png'
import roviusPicture from '../img/rovius.png'
import './css/components.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Navigation = () => {



    return (
            <Nav className="justify-content-center">
           
            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Moodle
            </Tooltip>}>
            <NavLink className="navLink" href="https://hhmoodle.haaga-helia.fi" rel="noopener noreferrer" target="_blank">
                <Image id="moodleLink" className="navImg" src={moodlePicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>
            

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Outlook
            </Tooltip>}>
            <NavLink  className="navLink" href="http://mymail.haaga-helia.fi" rel="noopener noreferrer" target="_blank">
                <Image id="outlookLink" className="navImg" src={outlookPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Peppi
            </Tooltip>}>
            <NavLink  className="navLink" href="https://student.home.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">
                <Image id="peppiLink" className="navImg" src={peppiTestPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Lukkarikone
            </Tooltip>}>
            <NavLink className="navLink" href="https://lukkarit.haaga-helia.fi/#" rel="noopener noreferrer" target="_blank">
                <Image id="lukkarikoneLink" className="navImg" src={lukkariPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Kide.app
            </Tooltip>}>
            <NavLink className="navLink" href="https://kide.app/" rel="noopener noreferrer" target="_blank">
                <Image id="bailataanLink" className="navImg" src={kidePicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            VDI
            </Tooltip>}>
            <NavLink className="navLink" href="http://vdi.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">
                <Image id="vdiLink" className="navImg" src={vdiPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Myy search
            </Tooltip>}>
            <NavLink className="navLink" href="http://palvelum.me/myybrowserathhapp" rel="noopener noreferrer" target="_blank">
                <Image id="myyLink" className="navImg" src={myyPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            <OverlayTrigger
            placement='bottom'
            overlay={
            <Tooltip id={`hhtooltip`}>
            Rovius
            </Tooltip>}>
            <NavLink className="navLink" href="https://vdi-lab.cp.haaga-helia.fi/client/ " rel="noopener noreferrer" target="_blank">
                <Image id="roviusLink" className="navImg" src={roviusPicture} roundedCircle></Image>
                </NavLink>
            </OverlayTrigger>

            </Nav>
    )
}

export default Navigation