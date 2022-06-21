import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";

const Selects = (props) => {
  const { status: expand, toggleStatus: toggleExpand } = useToggle();
  const option = props.option;
  console.log(option)

  return (
    <div className="accordion">
      <button onClick={toggleExpand}>
        {option.question}<span>{expand ? "-" : "+"}</span>
      </button>
      {expand && 
        <div className="selects-flex">
					<div>
						<input type="radio" name="service" id="1" />
						<label htmlFor="1">
							<h4 className="selectd">{option.option1}</h4>
							<p>{option.option1Details}</p>
						</label>
					</div>
					<div >
						<input type="radio" name="service" id="2" />
						<label htmlFor="2">
							<h4>{option.option2}</h4>
							<p>{option.option2Details}</p>
						</label>
					</div>

					<div>
						<input type="radio" name="service" id="3" />
						<label htmlFor="3">
							<h4>{option.option3}</h4>
							<p>{option.option3Details}</p>
						</label>
					</div>
				</div>
        
        }
    </div>
  );
};

export default Selects;
