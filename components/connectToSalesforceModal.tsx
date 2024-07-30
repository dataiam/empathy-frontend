import React from 'react'

const ConnectToSalesforceModal = () => {
  return (
    <div
      className="createJModal modal custom-modal fade"
      id="connectToSalesforceModal"
      aria-labelledby="connectToSalesforceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="connectToSalesforceModalLabel">
            Connect to Salesforce Instance
            </h2>
            <button
              type="button"
              className="btn close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ><span className="ico icon-cross" aria-hidden="true"></span></button>
          </div>
          <div className="modal-body pt-3 pb-5">
            <form className="custom-form">
              <div className="form-group">
                <label className="label">Instance</label>
                <div className="custom-form-select">
                  <select className="form-select" aria-label="Select option">
                    <option selected>-- Select --</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
              <label className="label d-block">Operation</label>
              <div className="btn-group custom-btn-group" role="group" aria-label="Opearions list">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Insert</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Update</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Upsert</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Delete</label>
              </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
          <button
              type="button"
              className="btn btn-blue-outline md"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-blue md"
              data-bs-dismiss="modal" disabled
            >
              Next: Field Mappings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectToSalesforceModal;