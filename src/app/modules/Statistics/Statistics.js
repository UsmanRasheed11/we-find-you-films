import React from 'react'
import  './Statistics.css'


function Statistics() {
  return (
    <>
    <div class="container-fluid Mincontainer">
    <h1 className='Statistics'> Statistics</h1>
                  <div class="row">
                   
                    <div class="main-content">
                        <div class="header bg-gradient-primary">
                            <div class="container-fluid">
                                <div class="header-body">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0 shadow p-3 mb-5 bg-body rounded">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Users</h5>
                                                            <span class="h2 font-weight-bold mb-0">{ 0}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape gg text-white rounded-circle shadow">
                                                                <i class="fas fa-users"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="mt-3 mb-0 text-muted text-sm">
                                                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                                        <span class="text-nowrap"> Total Users</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0 shadow p-3 mb-5 bg-body rounded">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Utilities</h5>
                                                            <span class="h2 font-weight-bold mb-0">{ 0}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape gg text-white rounded-circle shadow">
                                                                <i class="fas fa-list"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="mt-3 mb-0 text-muted text-sm">
                                                        <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                                                        <span class="text-nowrap"> Total WatchList</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-xl-3 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0 shadow p-3 mb-5 bg-body rounded">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Users Utilities</h5>
                                                            <span class="h2 font-weight-bold mb-0">{ 0}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape gg text-white rounded-circle shadow">
                                                                <i class="fas fa-th-list"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="mt-3 mb-0 text-muted text-sm">
                                                        <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                                                        <span class="text-nowrap"> Total Search</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-xl-3 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0 shadow p-3 mb-5 bg-body rounded" >
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Services</h5>
                                                            <span class="h2 font-weight-bold mb-0">{ 0}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape gg text-white rounded-circle shadow">
                                                                <i class="fas fa-cog"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="mt-3 mb-0 text-muted text-sm">
                                                        <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
                                                        <span class="text-nowrap"> Total Cinema</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>





                                        <div class="col-xl-3 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0 mm shadow p-3 mb-5 bg-body rounded"  >
                                                <div class="card-body" >
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">Digital Assistance</h5>
                                                            <span class="h2 font-weight-bold mb-0">{ 0}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape gg text-white rounded-circle shadow">
                                                                <i class="fas fa-user-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p class="mt-3 mb-0 text-muted text-sm">
                                                        <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                                                        <span class="text-nowrap"> Total Digital Assistance </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    
    </>
  )
}

export default Statistics