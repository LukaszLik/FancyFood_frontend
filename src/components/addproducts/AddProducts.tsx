import React, { useState } from "react";
import InputList from "./../../common/litInputs/InputList";
import {Button} from "@material-ui/core";

const AddProducts = () => {
    const [ingredients, setIngredients] = useState([{data: "", id: 0}]);
    const [steps, setSteps] = useState([{data: "", id: 0}]);
    const [values, setValues] = useState({
        title: "",
        tags: [],
        quantity: 0,
        time: "",
        image: ""
    });

    const handleInputChange = (e, index, componentList, componentEl) => {
        const { name, value } = e.target;
        const list = [...componentEl];
        list[index][name] = value;
        componentList(list);
    };

    const handleRemove = (index, componentList, componentEl)  => {
        const list = [...componentEl];
        list.splice(index, 1);
        componentList(list);
    };

    const handleAdd = (index, componentList, componentEl) => {
        componentList([...componentEl, {data: "", id: index+1}]);
    };

    const createHandler = (e) => {
        const data = {
            ingredients: ingredients,
            steps: steps
        }

        console.log("aaaaa");
        console.log(data);
    }

    return (
        <div>
            <InputList
                name="Ingredients"
                el={ingredients}
                setEl={setIngredients}
                change={handleInputChange}
                add={handleAdd}
                remove={handleRemove}
            />

            <InputList
                name="Steps"
                el={steps}
                setEl={setSteps}
                change={handleInputChange}
                add={handleAdd}
                remove={handleRemove}
            />

            <Button
                variant="contained"
                type="submit"
                color="secondary"
                className="btn-login"
                size="large"
                onClick={createHandler}
            >
                <span>Dodaj przepis</span>
            </Button>
        </div>
    );
};

export default AddProducts;