import { Navbar, Container, Nav, Form, Card } from "react-bootstrap";
import LogoSrc from './../../Assets/Img/Logo/logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

function Header() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={LogoSrc}
            height="30"
            className="d-inline-block align-top"
            alt="Main Logo"
          />
          OpenSea
        </Navbar.Brand>
        <Form className="DocSearch-Form">
            <SearchIcon />
            <Form.Control
              type="search"
              placeholder="Search items, collections, and accounts"
              className="me-2 DocSearch-Input"
              aria-label="Search items, collections, and accounts"
              />
        </Form>
        <Nav>
          <Nav.Link hraf="/#">Explore</Nav.Link>
          <Nav.Link hraf="/#">Stats</Nav.Link>
          <Nav.Link hraf="/#">Resources</Nav.Link>
          <Nav.Link hraf="/#">Create</Nav.Link>
        </Nav>
        <div>
          <AccountCircleOutlinedIcon />
          <AccountBalanceWalletOutlinedIcon />
        </div>
      </Container>
    </Navbar>
  )
}

export default Header