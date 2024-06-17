import React, {useState} from "react";
import chevronRight from "../../images/Chevron-right.png";
import "../css/FilterGroup.css";

const FilterItem = ({ id, name, label, count }) => (
    <div className="individual_filter_label">
      <div className="individual_filter">
        <input
          className="input_checkbox"
          type="checkbox"
          id={id}
          name={name}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <p>{count}</p>
    </div>
);

const FilterCategory = ({title, items, input,seeMore }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <fieldset className={title.replace(/\s+/g, '-')}>
        <div onClick={toggleOpen} className="category-header">
          <legend><h3>{title}</h3></legend>
          <img
            className={`${isOpen ? 'filter-open' : 'filter-closed'}`}
            src={chevronRight}
            alt="flèche vers bas"
          />
        </div>
        {isOpen && (
          <div className="individual_group_filter">
            {input ? (
              <input type="text" placeholder="Rechercher un sujet..." />
            ) : null}
            {items.map((item, index) => (
              <FilterItem key={index} {...item} />
            ))}
            {seeMore ? (
              <div className="filter-see-more"><button >VOIR PLUS ({seeMore})</button></div>
            ) : null}
          </div>
        )}
      </fieldset>
    );
};
  
  

const FilterGroup = ({categories}) => (
    <div className="all_filter">
        {categories.map((category, index) => (
            <FilterCategory key={index} {...category} /> /* ici la category  */
        ))}
    </div>
);

export {FilterGroup, FilterCategory, FilterItem}