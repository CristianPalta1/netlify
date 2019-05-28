import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import eurekaLogo from '../images/logo1.jpeg';
import BadgesList from '../components/Listas1';
import Productos from '../components/Productos';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    // console.log('1. constructor()');

    this.state = {
      data: [Productos],
    };
  }

  componentWillUnmount() {
    // console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    // console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
              
                className="Badges_conf-logo"
                src={eurekaLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/FormEmpresa" className="btn btn-primary">
              Nueva empresa
            </Link>
          </div>
          
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Usuario
            </Link>
          </div>
          <hr />
          <h1>Nuestros usuarios y Empresas </h1>
          <h1 className="Centro_texto">Destacados</h1>
          <Productos/>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
