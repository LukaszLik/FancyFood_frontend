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
  FormControl,
  Select,
  MenuItem,
  Chip,
  InputLabel,
  Input,
} from "@material-ui/core";
import "./AddProduct.css";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import ConnectionService from "../../services/connection";
import Tags from "../../common/Tags";

const AddProducts = (props) => {
  const [ingredients, setIngredients] = useState([
    { data: "", orderNumber: 0 },
  ]);
  const [steps, setSteps] = useState([{ data: "", orderNumber: 0 }]);
  const [tags, setTags] = useState<string[]>([]);
  const [values, setValues] = useState({
    title: "",
    quantity: 0,
    time: "",
    image: null,
  });

  const handleChange =
    (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleTags = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
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
    componentList([...componentEl, { data: "", orderNumber: index + 1 }]);
  };

  const createHandler = (e) => {
    const data = {
      recipeName: values.title,
      tags: tags,
      servingQuantity: values.quantity,
      timeDescription: values.time,
      steps: steps,
      ingredients: ingredients,
      image: values.image,
    };

    ConnectionService.saveRecipe(data).then(
      () => {
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    // @ts-ignore
    hiddenFileInput.current.click();
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

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  const handleImage =
    (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      setValues({ ...values, [prop]: event.target.files[0] });
    };

  const tagsArray = Object.values(Tags);

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

          <FormControl variant="filled" className="single-input">
            <InputLabel id="demo-mutiple-chip-label">Tagi</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={tags}
              onChange={handleTags}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={value} style={{ margin: "2px" }} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {tagsArray.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
