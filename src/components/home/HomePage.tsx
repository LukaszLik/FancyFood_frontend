import React from "react";
import FoodCard from "./FoodCard";

interface State {}
interface Props {}

export class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <div className="home-page">
                <h1>Hello</h1>

                <div>
                    <FoodCard />
                </div>
            </div>

        );
    }
}
