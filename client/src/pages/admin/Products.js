import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { useState, useEffect } from "react";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;

export default function AdminProduct() {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />
  
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Create products</div>

            <Select
              showSearch
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="choose category"
              onChange={(value) => console.log(value)}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c.name}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}
