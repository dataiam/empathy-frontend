import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RecipeCard from "./recipeCard";
import { CreateJobSchema } from "@app/types/schema";

const RecipeSelectionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(CreateJobSchema), // Apply the zodResolver
  });
  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
}
  return (
    <form>
      <div className="filter-section">
        <div className="search-holder">
          <span className="ico icon-search" aria-hidden="true"></span>
          <input type="text" className="form-control search-field" placeholder="Search Recipe Library"/>
        </div>
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
      <div className="filter-tiles">
        <div className="tiles">
          <ul className="tile-list">
            <li>
              <a href="#"><span className="tile-item">Sales</span></a>
            </li>
            <li>
              <a href="#"><span className="tile-item">Marketing</span></a>
            </li>
          </ul>
        </div>
        <ul className="view-panels-holder">
          <li className="panel-item"><a href="#"><span aria-hidden="true" className="ico icon-list-view"></span></a></li>
          <li className="panel-item"><a href="#"><span aria-hidden="true" className="ico icon-table-view"></span></a></li>
        </ul>
      </div>
      <div className="row">
        <RecipeCard/>
      </div>
    </form>
  )
}

export default RecipeSelectionForm;