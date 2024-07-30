import React from "react";

const TabsDropdownBox = () => {
  return (
    <div className="dropdown custom-dropdown custom-tabs-dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Phone Number
        <span className="ico icon-down-arrow" aria-hidden="true"></span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <div className="search-holder">
            <div className="form-group form-with-icon">
              <span className="ico-left icon-search" aria-hidden="true"></span>
              <input type="text" className="form-control" placeholder="Search Fields"/>
              <span className="ico-right icon-cross-filled" aria-hidden="true"></span>
            </div>
          </div>
          <ul className="nav nav-tabs list-tabs" id="salesforceObjectTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="unmapped-tab" data-bs-toggle="tab" data-bs-target="#unmapped" type="button" role="tab" aria-controls="unmapped" aria-selected="true">Unmapped</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="ids-tab" data-bs-toggle="tab" data-bs-target="#ids" type="button" role="tab" aria-controls="ids" aria-selected="false">IDs</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom" type="button" role="tab" aria-controls="custom" aria-selected="false">Custom</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="mapped-tab" data-bs-toggle="tab" data-bs-target="#mapped" type="button" role="tab" aria-controls="mapped" aria-selected="false">Mapped</button>
            </li>
          </ul>
          <div className="tab-content" id="salesforceObjectTabContent">
            <div className="tab-pane fade show active" id="unmapped" role="tabpanel" aria-labelledby="unmapped-tab">
            <ul className="tab-menu">
              <li><a className="tab-item" href="#">SIC Code</a></li>
              <li><a className="tab-item" href="#">Phone</a></li>
              <li><a className="tab-item" href="#">Email</a></li>
            </ul>
            </div>
            <div className="tab-pane fade" id="ids" role="tabpanel" aria-labelledby="ids-tab">...</div>
            <div className="tab-pane fade" id="custom" role="tabpanel" aria-labelledby="custom-tab">...</div>
            <div className="tab-pane fade" id="mapped" role="tabpanel" aria-labelledby="mapped-tab">...</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TabsDropdownBox;
