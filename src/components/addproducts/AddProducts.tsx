import React, { useState } from "react";
import InputList from "./../../common/litInputs/InputList";
import {
  withStyles,
  Theme,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import "./AddProduct.css";
import ChipInput from "material-ui-chip-input";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const AddProducts = (props) => {
  const [ingredients, setIngredients] = useState([{ data: "", id: 0 }]);
  const [steps, setSteps] = useState([{ data: "", id: 0 }]);
  const [values, setValues] = useState({
    title: "",
    chips: new Array(),
    quantity: 0,
    time: "",
    image: null,
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
    minHeight: "70vh",
    width: "50vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
    margin: "5vh 0vh 5vh 0vh",
  };

  const UploadCustomButton = withStyles((theme: Theme) => ({
    root: {
      fontWeight: 500,
      color: grey[50],
      backgroundColor: grey[500],
      "&:hover": {
        backgroundColor: grey[800],
      },
    },
  }))(Button);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    // @ts-ignore
    hiddenFileInput.current.click();
  };

  const handleImage = (prop) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // @ts-ignore
    setValues({ ...values, [prop]: event.target.files[0] });
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
            <Typography className="titleStyle" variant="h5">
              Dodaj przepis
            </Typography>
          </CardContent>

          <TextField
            className="single-input"
            type="text"
            label="Tytuł"
            placeholder="Tytuł"
            margin="normal"
            variant="filled"
            name="title"
            onChange={handleChange("title")}
            value={values.title}
          />

          <ChipInput
            className="single-input"
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

          <input
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={handleImage("image")}
            style={{ display: "none" }}
          />

          <UploadCustomButton variant="contained" onClick={handleClick}>
            Wybierz Zdjęcie
          </UploadCustomButton>
          {values.image ? (
            // @ts-ignore
            <p>{values.image.name}</p>
          ) : (
            <br />
          )}
        </CardContent>
        <CardContent>
          <div className={"div-margin"}>
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
          </div>

          <div className={"div-margin"}>
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
          </div>

          <Button
            variant="outlined"
            color="secondary"
            style={{ marginRight: "5%" }}
            component={Link}
            to="/"
          >
            Anuluj
          </Button>
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
