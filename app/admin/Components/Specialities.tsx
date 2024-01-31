"use client";

function Specialities() {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper bg-white">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Specialities</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Specialities</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <a
                  href="#Add_Specialities_details"
                  data-toggle="modal"
                  className="btn btn-primary float-right mt-2"
                >
                  Add
                </a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Specialities</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#SP001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/specialities/specialities-01.png"
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Urology</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                data-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/specialities/specialities-02.png"
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Neurology</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                data-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP003</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/specialities/specialities-03.png"
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Orthopedic</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                data-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP004</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/specialities/specialities-04.png"
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Cardiologist</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                data-toggle="modal"
                                href="#delete_modal"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#SP005</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/specialities/specialities-05.png"
                                  alt="Speciality"
                                />
                              </a>
                              <a href="profile.html">Dentist</a>
                            </h2>
                          </td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                className="btn btn-sm bg-success-light"
                                data-toggle="modal"
                                href="#edit_specialities_details"
                              >
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a
                                className="btn btn-sm bg-danger-light"
                                data-toggle="modal"
                                href="#delete_modal"
                              >
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Modal */}
      <div
        className="modal fade"
        id="Add_Specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Specialities</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Specialities</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /ADD Modal */}
      {/* Edit Details Modal */}
      <div
        className="modal fade"
        id="edit_specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Specialities</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Specialities</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Cardiology"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Details Modal */}
      {/* Delete Modal */}
      <div
        className="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/*	<div class="modal-header">
							<h5 class="modal-title">Delete</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>*/}
            <div className="modal-body">
              <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-primary">
                  Save{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
}

export default Specialities;
