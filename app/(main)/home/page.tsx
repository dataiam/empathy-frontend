import CardBox from '@components/card';
import CreateJobModal from '@components/createJobModal';
import ProductivityBoost from '@components/productivityBoost';
import '@styles/home.scss';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <section className="home-section">
        <div className="page-title">
          <h1 className="title">Data I Am Home<small>Good Morning, Adam, let’s prep some data</small></h1>
          <button type="button" className="btn btn-blue" data-bs-toggle="modal" data-bs-target="#createJobModal">
            <span className="ico icon-add" aria-hidden="true"></span>Create new job
          </button>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-7">
            <div className="white-wrapper radius-16">
              <div className="wrapper-title">
                <h2 className="title">Jobs Status</h2>
                <div className="filter-section">
                <a href="#" className="text">Sort by: Newest first<span aria-hidden="true" className="ico icon-filter"></span></a>
                <div className="dropdown custom-dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All<span className="ico icon-down-chevron" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">All</a></li>
                    <li><a className="dropdown-item" href="#">Completed</a></li>
                    <li><a className="dropdown-item" href="#">Scheduled</a></li>
                  </ul>
                </div>
                </div>
              </div>
              <div className="card-section">
                <div className="row">
                  <CardBox/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <ProductivityBoost/>
          </div>
        </div>
      </section>
    </div>
    <CreateJobModal/>
    </>
  )
}

export default Home;