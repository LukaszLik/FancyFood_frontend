import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import "./EditRecipe.css";
import Tags from "../../common/Tags";
import { grey } from "@material-ui/core/colors";
import InputList from "../../common/litInputs/InputList";
import { Link } from "react-router-dom";
import ConnectionService from "../../services/connection";

interface RecipeData {
  recipeId: number;
  recipeName: string;
  servingQuantity: number;
  timeDescription: string;
  image: any;
}

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    minHeight: "70vh",
    width: "55vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingBottom: "5vh",
    margin: "5vh 0vh 5vh 0vh",
  },
}));

const EditRecipeCard = (props) => {
  const getImage = (id: number) => {
    return `http://localhost:3000/recipe/photo/${id}`;
  };
  const classes = useStyles();
  const [values, setValues] = useState<RecipeData>({
    recipeId: props.data.recipeId,
    recipeName: props.data.recipeName,
    servingQuantity: props.data.recipeBody.servingQuantity,
    timeDescription: props.data.recipeBody.timeDescription,
    image: getImage(props.data.recipeId),
  });
  const [tags, setTags] = useState(props.data.tags.map((el) => el.tagName));
  const [ingredients, setIngredients] = useState(
    props.data.recipeBody.ingredients
  );
  const [steps, setSteps] = useState(props.data.recipeBody.steps);

  const tagsArray = Object.values(Tags);

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
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
  //Handlery
  const handleChange =
    (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleTags = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    // @ts-ignore
    hiddenFileInput.current.click();
  };
  const handleImage =
    (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {

      setValues({
        ...values,// @ts-ignore
        [prop]: URL.createObjectURL(event.target.files[0]),
      });
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

  const handleAdd = (index, componentList, componentEl, data = "") => {
    componentList([...componentEl, { data: "", orderNumber: index + 1 }]);
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const data = {
      recipeId: values.recipeId,
      recipeName: values.recipeName,
      tags: tags,
      servingQuantity: values.servingQuantity,
      timeDescription: values.timeDescription,
      steps: steps,
      ingredients: ingredients,
    };

    ConnectionService.updateRecipe(data).then(
      () => {
        window.location.href = `/recipe/${values.recipeId}`;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Box
      display="flex"
      alignSelf="center"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      style={{ minHeight: "90vh" }}
    >
      <Card className={classes.paperStyle} variant="outlined">
        <form method="POST" onSubmit={updateHandler}>
          <CardContent>
            <CardContent style={{ paddingBottom: "0px" }}>
              <Typography className="titleStyle" variant="h5">
                Edytuj przepis
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
              onChange={handleChange("recipeName")}
              value={values.recipeName}
              required
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
                required
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {(selected as string[]).map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        style={{ margin: "2px" }}
                      />
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
                onChange={handleChange("servingQuantity")}
                value={values.servingQuantity}
                required
              />

              <TextField
                type="text"
                label="Czas"
                placeholder="Czas"
                margin="normal"
                variant="filled"
                name="time"
                onChange={handleChange("timeDescription")}
                value={values.timeDescription}
                required
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

            <CardContent>
              <img src={values.image} alt="image" />
            </CardContent>
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
            >
              <span className="addRecBtn">Dodaj przepis</span>
            </Button>
          </CardContent>
        </form>
      </Card>
    </Box>
  );
};

export default EditRecipeCard;
