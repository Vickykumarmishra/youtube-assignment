import React from 'react'

export default function Navbar() {
  return (
    <div>
      
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand"><b>YouTube</b></a> */}
    <a class="navbar-brand" href="#">
      <img src="youtube.png" alt="Logo" width="30" height="30" class="d-inline-block"/>
      <b>YouTube</b>
    </a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
