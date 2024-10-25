import { useState } from "react";
import "./App.css";

function App() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [display, setDisplay] = useState(false);
  const [isWaterProof, setIsWaterProof] = useState("");
  const [features, setFeatures] = useState([]);
  const [dateOfStorage, setDateOfStorage] = useState("");
  const [storageUnitNumber, setStorageUnitNumber] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [formIsSubmitted, setIsFormSubmitted] = useState(false);

  const waterProofHandler = (e) => {
    if (e.target.checked) {
      setIsWaterProof("Yes");
    } else {
      setIsWaterProof("No");
    }
  };

  const featuresHandler = (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      setFeatures((prevVal) => [...prevVal, value]);
    } else {
      setFeatures((prevVal) => prevVal.filter((val) => val !== value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (condition === "") {
      setDisplay(true);
    } else if (condition) {
      setDisplay(false);
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="bg-dark text-light">
      <nav className="bg-primary text-light py-2">
        <h3 className="container">Store Hub</h3>
      </nav>

      <section className="container">
        <h1>Inventory Form</h1>
        <form onSubmit={submitHandler}>
          <label className="form-label" htmlFor="productName">
            Product Name:
          </label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            className="form-control"
            type="text"
            id="productName"
            required
          />
          <label className="form-label" htmlFor="quantity">
            Quantity:
          </label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            className="form-control"
            type="number"
            id="quantity"
            required
          />
          <label className="form-label">Category:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Equipment">Equipment</option>
          </select>
          <label className="form-label" htmlFor="">
            Condition:
          </label>{" "}
          <br />
          <input
            onChange={(e) => setCondition(e.target.value)}
            name="condition"
            type="radio"
            value="New"
          />{" "}
          New
          <input
            onChange={(e) => setCondition(e.target.value)}
            value="Used"
            name="condition"
            type="radio"
          />{" "}
          Used
          <br />
          {display && <span>Please select one option.</span>}
          <br />
          <input
            onChange={waterProofHandler}
            className="form-check-input"
            type="checkbox"
          />{" "}
          Waterproof
          <br />
          <br />
          <label className="form-label" htmlFor="">
            Features:
          </label>
          <br />
          <input
            onChange={featuresHandler}
            className="form-check-input"
            type="checkbox"
            value="Lightweight"
          />{" "}
          Lightweight
          <input
            onChange={featuresHandler}
            className="form-check-input"
            type="checkbox"
            value="Durable"
          />{" "}
          Durable
          <br />
          <br />
          <label className="form-label" htmlFor="dateOfStorage">
            Date of Storage:
          </label>
          <input
            onChange={(e) => setDateOfStorage(e.target.value)}
            className="form-control"
            type="date"
            id="dateOfStorage"
          />
          <label className="form-label" htmlFor="unitNumber">
            Storage Unit Number:
          </label>
          <input
            onChange={(e) => setStorageUnitNumber(e.target.value)}
            className="form-control"
            type="number"
            id="unitNumber"
          />
          <label className="form-label" htmlFor="unitCost">
            Unit Cost:
          </label>
          <input
            onChange={(e) => setUnitCost(e.target.value)}
            className="form-control"
            type="number"
            id="unitCost"
          />
          <label className="form-label" htmlFor="vendorName">
            Vendor Name:
          </label>
          <input
            onChange={(e) => setVendorName(e.target.value)}
            className="form-control"
            type="text"
            id="vendorName"
          />
          <button className="btn btn-primary" type="Submit">
            Submit
          </button>
        </form>
      </section>

      {formIsSubmitted && (
        <section className="container">
          <h2>Submitted Details:</h2>
          <p>Product Name: {productName}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Condition: {condition}</p>
          <p>Waterproof: {isWaterProof}</p>
          <p>Features: {features.join(", ")}</p>
          <p>Date of Storage: {dateOfStorage}</p>
          <p>Storage Unit Number: {storageUnitNumber}</p>
          <p>Unit Cost: ${unitCost}</p>
          <p>Vendor Name: {vendorName}</p>
          <p>Total Cost: ${Number(unitCost) * Number(quantity)}.00</p>
        </section>
      )}
    </div>
  );
}

export default App;
