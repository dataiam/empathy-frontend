import { BadgeSuccess } from "./badge";

const CardBox = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card-wrapper">
          <div className="title">
            <h3 className="title">Marketing Leads Update</h3>
            <BadgeSuccess
              title="completed"
              badgeClass="custom-badge badge green"
            />
          </div>
          <div className="info-wrapper">
            <p className="card-info">12,000 Records updated successfully</p>
            <p className="card-date">7th July, 2024, 7:00 PM</p>
            <p className="card-date">Job Duration: 45 seconds</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card-wrapper">
          <div className="title">
            <h3 className="title">Marketing Leads Update</h3>
            <BadgeSuccess
              title="Error"
              badgeClass="custom-badge badge yellow"
            />
          </div>
          <div className="info-wrapper">
            <p className="card-info">12,000 Records updated successfully</p>
            <p className="card-date">7th July, 2024, 7:00 PM</p>
            <p className="card-date">Job Duration: 45 seconds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBox;
