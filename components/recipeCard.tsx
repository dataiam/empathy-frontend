import Image from "next/image";
import logo from "@public/assets/images/logo.svg";

const RecipeCard = () => {
  return (
    <>
    <div className="col-md-4 recipe-col">
      <div className="recipe-holder">
      <div className="recipe-box">
        <h2 className="title">Insert new leads into Salesforce.</h2>
        <div className="recipe-info-box">
          <div className="recipe-stats">
            <p className="title">Community</p>
            <p className="stats">
              <span aria-hidden="true" className="ico icon-users"></span>1.5k
            </p>
          </div>
          <div className="recipe-users">
            <div className="img-holder">
              <Image src={logo} width={20} height={20} alt="Logo" />
              Data I Am Labs
            </div>
            <div className="badge-dept">
              <span className="badge">Marketing</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="col-md-4 recipe-col">
      <div className="recipe-holder">
      <div className="recipe-box">
        <h2 className="title">Insert new leads into Salesforce.</h2>
        <div className="recipe-info-box">
          <div className="recipe-stats">
            <p className="title">Community</p>
            <p className="stats">
              <span aria-hidden="true" className="ico icon-users"></span>1.5k
            </p>
          </div>
          <div className="recipe-users">
            <div className="img-holder">
              <Image src={logo} width={20} height={20} alt="Logo" />
              Data I Am Labs
            </div>
            <div className="badge-dept">
              <span className="badge">Marketing</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default RecipeCard;
