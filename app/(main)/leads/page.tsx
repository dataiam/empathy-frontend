import ConnectToSalesforceModal from "@components/connectToSalesforceModal";
import '@styles/leadsPage.scss';
import cloudImg from '@public/assets/images/cloud.svg';
import Image from "next/image";
import TabsDropdownBox from "@components/tabsDropdownBox";

const LeadsInformationPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="page-title-wrapper">
            <div className="page-title-holder">
            <span aria-hidden="true" className="ico icon-file"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
              <div className="title-holder">
                <h2 className="title"><small className="sub-title">.XLSX File</small>Leads Information</h2>
              </div>
            </div>
            <div className="btn-holder">
              <button type="button" className="btn btn-outline me-2" data-bs-toggle="modal" data-bs-target="#connectToSalesforceModal">
                  Connect to Salesforce
              </button>
              <div className="dropdown custom-dropdown custom-dropdown-icon">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Run Job<span className="ico icon-down-chevron" aria-hidden="true"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item active" href="#"><span className="ico icon-run" aria-hidden="true"></span>Run Job</a></li>
                  <li><a className="dropdown-item" href="#"><span className="ico icon-schedule" aria-hidden="true"></span>Schedule Job</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="field-mapping-section">
            <h2 className="title">Field Mappings</h2>
            <div className="field-mapping-holder">
              <div className="mapping-heading">
                <h3 className="title"><span aria-hidden="true" className="ico icon-file"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>Source: Leads Information.xlsx</h3>
                <div className="dropdown custom-dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <Image src={cloudImg} alt="cloud image"/>Target: Lead Object (Salesforce)
                   <span className="ico icon-down-arrow" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="mappings-wrapper">
                <div className="mappings">
                  <div className="file-object">Phone Number</div>
                  <span className="ico-relation icon-big-arrow-right" aria-hidden="true"></span>
                  <div className="salesforce-object">
                    <TabsDropdownBox/>
                  </div>
                  <a href="#" className="cancel-ico"><span className="ico-cross icon-cross" aria-hidden="true"></span></a>
                </div>
                <div className="mappings">
                  <div className="file-object">Phone Number</div>
                  <span className="ico-relation icon-big-arrow-right" aria-hidden="true"></span>
                  <div className="salesforce-object">
                    <TabsDropdownBox/>
                  </div>
                  <a href="#" className="cancel-ico"><span className="ico-cross icon-cross" aria-hidden="true"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="white-wrapper recipe-mapping-wrapper">
            <h3 className="title">Recipe (Mappings)</h3>
            <div className="recipe-holder">
              <ol className="list">
                <li>Phone_Number<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Phone</li>
                <li>mail<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Email</li>
                <li>Name<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Name</li>
                <li>Contact<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Contact_Type</li>
                <li>Marketing_Event_Name<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Lead_Source</li>
                <li>Title<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Title__c</li>
                <li>Code<span className="ico icon-arrow-right" aria-hidden="true"></span>Lead.Code</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <ConnectToSalesforceModal/>
    </div>
  )
}

export default LeadsInformationPage;