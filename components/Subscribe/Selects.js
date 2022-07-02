import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
const Selects = (props) => {
  const { status: expand, toggleStatus: toggleExpand } = useToggle();
  const option = props.option;
	const changeWord = props.changeWord;
	
  return (
    <div className="option">
      <button className="option__btn" onClick={toggleExpand}><h2 className="option--title">{option.question}</h2>
        <span>{expand ? <FiChevronUp className="option__chevron"/> : <FiChevronDown className="option__chevron"/>}</span>
      </button>
      {expand && 
        <form className="option__items">
					<div onChange={(e) => changeWord(e.target.value)} >
						<input type="radio" name={option.id}  id={option.optionOne.id} value={option.optionOne.title} />
						<label className="option__inner" htmlFor={option.optionOne.title}>
							<span className="option--subhead">{option.optionOne.title}</span>
							<span className="subtext">{option.optionOne.description}</span>
						</label>
					</div>
					<div onChange={(e) => changeWord(e.target.value)} >
						<input type="radio" name={option.id}   id={option.optionTwo.id} value={option.optionTwo.title} />
						<label className="option__inner" htmlFor={option.optionTwo.title}>
							<span className="option--subhead">{option.optionTwo.title}</span>
							<span className="subtext">{option.optionTwo.description}</span>
						</label>
					</div>

					<div onChange={(e) => changeWord(e.target.value)} >
						<input type="radio" name={option.id}  id={option.optionThree.id} value={option.optionThree.title} />
						<label className="option__inner" htmlFor={option.optionThree.title}>
							<span className="option--subhead">{option.optionThree.title}</span>
							<span className="subtext">{option.optionThree.description}</span>
						</label>
					</div>
				</form>
        
        }
    </div>
  );
};

export default Selects;
