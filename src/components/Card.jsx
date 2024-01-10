import { Wrapper } from "../styles/app.css";

export default function Card({ $photo, $index, $faded }) {
    return (
        <Wrapper
            $photo={$photo} 
            $index={$index} 
            $faded={$faded} 
        />
    )
}