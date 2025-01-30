import React from 'react'

export default function Header(props) {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <a className="navbar-brand" href="https://youtube.com/shorts/Y_SDBQ-UogQ?si=mq59EeaqMQ_t2W2p" target='_blank'><img src="fight.png" className='fight'/> DO-IT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
