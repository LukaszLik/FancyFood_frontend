import React from "react";
import FoodCard from "./FoodCard";
import RecipeFilters from "./RecipeFilters"

interface State {}
interface Props {}

export class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <div className="home-page">
                <RecipeFilters />

                <div>
                    <FoodCard />
                </div>
            </div>

        );
    }
}
