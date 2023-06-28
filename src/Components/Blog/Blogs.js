import React, { useState, useEffect } from "react";
import "./Blog.css";
import Sidebar from "./SideBar";
import BlogList from "./BlogList";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdOutlineManageSearch } from "react-icons/md";
import * as api from "../../function/axiosReq";
function Blog() {
  const [BlogsList, setBlogsList] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [displayMode, setDisplayMode] = useState("accordion");
  const [openBox, setOpenBox] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpenBox(true);
    setCheckedItems([]);
  };

  const toggleDisplayMode = () => {
    if (window.innerWidth > 1080) {
      setDisplayMode("accordion");
    } else if (window.innerWidth < 420) {
      setDisplayMode("dropdown");
    } else {
      setDisplayMode((prevMode) =>
        prevMode === "accordion" ? "dropdown" : "accordion"
      );
    }
  };

  useEffect(() => {
    toggleDisplayMode();
  }, []);

  const [checkedItems, setCheckedItems] = useState([]);

  // console.log("Check", checkedItems);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // Check if the checkbox is already checked
    if (checkedItems.includes(value)) {
      // Uncheck the checkbox and remove it from the checked items
      setCheckedItems(checkedItems.filter((item) => item !== value));
      if (displayMode === "accordion") {
        DesktopView(checkedItems.filter((item) => item !== value));
      }
    } else {
      // Check the checkbox and add it to the checked items
      setCheckedItems([...checkedItems, value]);
      if (displayMode === "accordion") {
        DesktopView([...checkedItems, value]);
      }
    }
  };

  const DesktopView = (data) => {
    setLoading(true);
    // const classNumber = parseInt(selectedOption);
    const classNumber = selectedOption.replace(/\D/g, "");
    const filterdata = {
      filter: {
        classes: [classNumber],
        subjects: data,
      },
    };
    console.log("filter", filterdata);
    getBlogsList(filterdata);
  };

  const MobileAPICAlling = () => {
    setLoading(true);
    // const classNumber = parseInt(selectedOption);
    const classNumber = selectedOption.replace(/\D/g, "");
    const filterdata = {
      filter: {
        classes: [classNumber],
        subjects: checkedItems,
      },
    };
    console.log("filter", filterdata);
    getBlogsList(filterdata);
    handleOptionClick("");
  };

  const getBlogsList = async (data) => {
    try {
      const res = await api.setFilterCategory(data);
      // setBlogsList(res.data);
      setBlogsList(res.data);
      setLoading(false);
      // console.log("Blogs", res.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  return (
    <div className="blog">
      <div className="sidebar">
        {/* <Sidebar setBlogCategory={setBlogCategory} /> */}
        <div className="options">
          {displayMode === "accordion" ? (
            <div className="Non-option">Classes -</div>
          ) : null}
          <div
            className={`option ${selectedOption === "9th" ? "selected" : ""}`}
            onClick={() => handleOptionClick("9th")}
          >
            9th
            {selectedOption === "9th" ? (
              <AiFillCaretUp
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            ) : (
              <AiFillCaretDown
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            )}
          </div>
          {selectedOption === "9th" ? (
            <SubjectOPtion
              openBox={openBox}
              displayMode={displayMode}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
              MobileAPICAlling={MobileAPICAlling}
            />
          ) : null}
          <div
            className={`option ${selectedOption === "10th" ? "selected" : ""}`}
            onClick={() => handleOptionClick("10th")}
          >
            10th
            {selectedOption === "10th" ? (
              <AiFillCaretUp
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            ) : (
              <AiFillCaretDown
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            )}
          </div>
          {/* {selectedOption === "10th" && ( */}
          {selectedOption === "10th" ? (
            <SubjectOPtion
              openBox={openBox}
              displayMode={displayMode}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
              MobileAPICAlling={MobileAPICAlling}
            />
          ) : null}

          {/* )} */}
          <div
            className={`option ${selectedOption === "11th" ? "selected" : ""}`}
            onClick={() => handleOptionClick("11th")}
          >
            11th
            {selectedOption === "11th" ? (
              <AiFillCaretUp
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            ) : (
              <AiFillCaretDown
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            )}
          </div>
          {selectedOption === "11th" ? (
            <SubjectOPtion
              openBox={openBox}
              displayMode={displayMode}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
              MobileAPICAlling={MobileAPICAlling}
            />
          ) : null}

          <div
            className={`option ${selectedOption === "12th" ? "selected" : ""}`}
            onClick={() => handleOptionClick("12th")}
          >
            12th
            {selectedOption === "12th" ? (
              <AiFillCaretUp
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            ) : (
              <AiFillCaretDown
                size={displayMode === "accordion" ? 25 : 18}
                color="black"
              />
            )}
          </div>

          {selectedOption === "12th" ? (
            <SubjectOPtion
              openBox={openBox}
              displayMode={displayMode}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
              MobileAPICAlling={MobileAPICAlling}
            />
          ) : null}
        </div>
      </div>

      <div className="bloglist">
        {/* <button onClick={toggleDisplayMode}>Toggle Display Mode</button> */}
        {Loading ? (
          <div>
            {" "}
            <h1> Loading </h1>{" "}
          </div>
        ) : (
          <BlogList Blogs={BlogsList} />
        )}
      </div>
    </div>
  );
}

function SubjectOPtion({
  openBox,
  displayMode,
  checkedItems,
  handleCheckboxChange,
  MobileAPICAlling,
}) {
  return (
    <div className={`accordion-content ${openBox ? "open" : ""}`}>
      {displayMode === "accordion" ? (
        <ul
          style={{
            display: "inline-block",
            textAlign: "left",
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li>
            <label>
              <input
                type="checkbox"
                value="Physics"
                checked={checkedItems.includes("Physics")}
                onChange={handleCheckboxChange}
              />
              Physics
            </label>
          </li>
          <li>
            {" "}
            <label>
              <input
                type="checkbox"
                value="Chemistry"
                checked={checkedItems.includes("Chemistry")}
                onChange={handleCheckboxChange}
              />{" "}
              Chemistry
            </label>
          </li>
          <li>
            {" "}
            <label>
              <input
                type="checkbox"
                value="Biology"
                checked={checkedItems.includes("Biology")}
                onChange={handleCheckboxChange}
              />{" "}
              Biology
            </label>
          </li>
          <li>
            {" "}
            <label>
              <input
                type="checkbox"
                value="Mathematics"
                checked={checkedItems.includes("Mathematics")}
                onChange={handleCheckboxChange}
              />{" "}
              Mathematics
            </label>
          </li>
        </ul>
      ) : (
        <div>
          <select multiple value={checkedItems} onChange={handleCheckboxChange}>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>
      )}
      {displayMode === "accordion" ? null : (
        <div onClick={MobileAPICAlling}>
          <MdOutlineManageSearch size={29} color="black" />
        </div>
      )}
    </div>
  );
}

export default Blog;
