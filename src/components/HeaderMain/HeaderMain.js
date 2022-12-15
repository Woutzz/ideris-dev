import React from 'react'
import './HeaderMain.css'

import { Link } from 'react-router-dom'

function HeaderMain() {

  return (
    <header>
      <div className="container">
          <div className="logo">
            <h1>API Ideris - Dev</h1>
          </div>

          <div className="btn-Mapping">
              <Link to="/mapping">
                <button>Mapear Categorias</button>
              </Link>
          </div>
      </div>
    </header>
  )
}

export default HeaderMain