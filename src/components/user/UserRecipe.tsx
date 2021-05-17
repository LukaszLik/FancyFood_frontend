import React, {useEffect} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {CardData} from "../home/HomePage";
import FoodCard from "../home/FoodCard";
import axios from "axios";
import "../home/HomePage.css"
import {EmptyFoodCard} from "./EmptyFoodCard";
import {Pagination} from "@material-ui/lab";

interface State {
    isLoading: boolean;
    recipes: CardData[];
    pageNumber: number;
    pages: number;
}


export const UserRecipe: React.FC = props => {
    const [state, setState] = React.useState<State>({
        isLoading: true,
        recipes: [] as CardData[],
        pageNumber: 0,
        pages: 0
    })



    const handlePageChange = (event, value) => {
        setState({...state, pageNumber: value - 1})
    }

    useEffect(() => {
        const getRecipes = () => {
            axios.get(`recipe/my/page/${state.pageNumber}`)
                .then((response) => {
                    setState({
                        isLoading: false,
                        recipes: response.data.content,
                        pageNumber: state.pageNumber,
                        pages: response.data.totalPages
                    })
                })
        }
        getRecipes()
    }, [state.pageNumber])

    return (
        <Grid container direction={"column"} alignItems={"flex-start"}>
            <Typography variant={"h5"}>Twoje przepisy</Typography>
            <Box className="card-area">
                <Box className="card-container">
                    <EmptyFoodCard/>
                    {state.recipes.map((recipe, index) => {
                        return <FoodCard key={index + state.pageNumber} {...recipe} />
                    })}
                </Box>
            </Box>
            <Grid container item alignContent={"flex-end"}>
                <Pagination count={state.pages} onChange={handlePageChange}/>
            </Grid>
        </Grid>
    )
}