import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {Component} from 'react'


class Droplist extends Component {
    state={
        data:
            [
            {
            label: "Menu 1",
            },
            {
            label: "Menu 2",
            submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
            },
            {
            label: "Menu 3",
            submenu: [
            { label: "Sub Menu 1" },
            { label: "Sub Menu 2" },
            { label: "Sub Menu 3" },
            { label: "Sub Menu 4" },
            ],
            },
            {
            label: "Menu 4",
            submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
            },
            ]
    }

    render() {
    return (
    <Dropdown>

      <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
      </Dropdown.Toggle>
      
      <Dropdown.Menu>

        <Dropdown.Item >Menu 1</Dropdown.Item>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
             Menu 2
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item >Sub Menu 1</Dropdown.Item>
            <Dropdown.Item >Sub Menu 2</Dropdown.Item>
            
          </Dropdown.Menu>

        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
             Menu 3
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item >Sub Menu 1</Dropdown.Item>
            <Dropdown.Item >Sub Menu 2</Dropdown.Item>
            <Dropdown.Item >Sub Menu 3</Dropdown.Item>
            <Dropdown.Item >Sub Menu 4</Dropdown.Item>
            
          </Dropdown.Menu>

        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
             Menu 4
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item >Sub Menu 1</Dropdown.Item>
            <Dropdown.Item >Sub Menu 2</Dropdown.Item>
            
          </Dropdown.Menu>

        </Dropdown>
      </Dropdown.Menu>



  
    </Dropdown>
    );
    }
}
 
export default Droplist;