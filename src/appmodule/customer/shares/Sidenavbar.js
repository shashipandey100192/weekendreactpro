import React from 'react'
import { Link } from 'react-router-dom'

function Sidenavbar() {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Sidenav</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="hookspage" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Hooks</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Updates</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Reports</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Overview</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">annually</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
          Orders
        </button>
        <div className="collapse show" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</Link></li>
            <li><Link to="#" className="a-body-emphasis d-inline-flex text-decoration-none rounded">Returned</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Sidenavbar