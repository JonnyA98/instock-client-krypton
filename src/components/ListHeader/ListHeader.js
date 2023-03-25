import "./ListHeader.scss";
import sort from "../../assets/Icons/sort-24px.svg";

const ListHeader = () => {
  //   const exCategories = [
  //     "Warehouse",
  //     "Address",
  //     "Contact Name",
  //     "Contact Information",
  //   ];

  return (
    <div className="list-header">
      <div className="list-header--left">
        {/* {exCategories.map((category) => {
          return (
            <div className="list-header__category-wrapper">
              <h4 className="list-header__category">{category}</h4>
              <img src={sort} alt="sort icon" className="list-header__sort" />
            </div>
          );
        })} */}
        <div className="list-header__name-add-wrapper">
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Warehouse</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Address</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
        </div>

        <div className="list-header__contact-wrapper">
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Contact Name</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Contact Information</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
        </div>
      </div>
      <h4 className="list-header__category list-header__category--actions">
        Actions
      </h4>
    </div>
  );
};

export default ListHeader;
