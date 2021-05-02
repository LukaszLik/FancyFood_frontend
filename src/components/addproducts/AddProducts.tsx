import React, { useState } from "react";
import InputList from "./../../common/litInputs/InputList";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import "./AddProduct.css";
import ChipInput from "material-ui-chip-input";

const AddProducts = () => {
  const [ingredients, setIngredients] = useState([{ data: "", id: 0 }]);
  const [steps, setSteps] = useState([{ data: "", id: 0 }]);
  const [values, setValues] = useState({
    title: "",
    chips: new Array(),
    quantity: 0,
    time: "",
    image: "",
  });

  const handleAddChip = (chip: any) => {
    setValues({
      ...values,
      chips: [...values.chips, chip],
    });
  };

  const handleDeleteChip = (chip: any, index: any) => {
    setValues({
      ...values,
      chips: values.chips.filter((c) => c !== chip),
    });
  };

  const handleChange = (prop) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleInputChange = (e, index, componentList, componentEl) => {
    const { name, value } = e.target;
    const list = [...componentEl];
    list[index][name] = value;
    componentList(list);
  };

  const handleRemove = (index, componentList, componentEl) => {
    const list = [...componentEl];
    list.splice(index, 1);
    componentList(list);
  };

  const handleAdd = (index, componentList, componentEl) => {
    componentList([...componentEl, { data: "", id: index + 1 }]);
  };

  const createHandler = (e) => {
    const data = {
      title: values.title,
      quantity: values.quantity,
      time: values.time,
      image: values.image,
      ingredients: ingredients,
      steps: steps,
      chips: values.chips,
    };

    console.log(data);
  };

  const paperStyle = {
    minHeight: "35vh",
    width: "55vh",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
  };

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      style={{ minHeight: "90vh" }}
    >
      <Card style={paperStyle} variant="outlined">
        <CardContent>
          <CardContent style={{ paddingBottom: "0px" }}>
            <Typography variant="h5">Dodaj przepis</Typography>
          </CardContent>

          <TextField
            className="login-input"
            type="text"
            label="Title"
            placeholder="Tytuł"
            margin="normal"
            variant="filled"
            name="title"
            onChange={handleChange("title")}
            value={values.title}
          />

          <ChipInput
            className="login-input"
            label="Tags"
            margin="normal"
            variant="filled"
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
            value={values.chips}
          />

          <div className="in-row">
            <TextField
              type="number"
              label="Ilość porcji"
              placeholder="Ilość porcji"
              margin="normal"
              variant="filled"
              name="quantity"
              onChange={handleChange("quantity")}
              value={values.quantity}
            />

            <TextField
              type="text"
              label="Czas"
              placeholder="Czas"
              margin="normal"
              variant="filled"
              name="time"
              onChange={handleChange("time")}
              value={values.time}
            />
          </div>
          {/*  upload file nput */}
        </CardContent>
        <CardContent>
          <InputList
            name="Składniki"
            el={ingredients}
            setEl={setIngredients}
            change={handleInputChange}
            add={handleAdd}
            remove={handleRemove}
            label="Składnik"
            placeholder="Składnik"
          />

          <InputList
            name="Przygotowanie"
            el={steps}
            setEl={setSteps}
            change={handleInputChange}
            add={handleAdd}
            remove={handleRemove}
            label="Krok"
            placeholder="Krok"
          />

          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
            onClick={createHandler}
          >
            <span className="addRecBtn">Dodaj przepis</span>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddProducts;
