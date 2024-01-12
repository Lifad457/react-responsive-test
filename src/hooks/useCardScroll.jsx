import React, { useState } from 'react';
import {photoArray} from "../utils/photos.js";
import useEventListener from './useEventListener.jsx';
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import description  from "../utils/descriptions.jsx";

export default function useCardScroll() {
    const [photoIndex, setPhotoIndex] = useState(1);
    const [text, setText] = useState(description(photoIndex));
    const nbPhotos = photoArray.length;
    const startIndex = 15;

    useEventListener('wheel', handleScroll);

    function handleScroll(e) {
        if (e.deltaY > 0) {
            if (photoIndex === nbPhotos) {
                setPhotoIndex(1);
                setText(description(1));
                return;
            }
            setPhotoIndex(photoIndex + 1);
            setText(description(photoIndex + 1));
        } else {
            if (photoIndex === 1) {
                setPhotoIndex(nbPhotos);
                setText(description(nbPhotos));
                return;
            }
            setPhotoIndex(photoIndex - 1);
            setText(description(photoIndex - 1));
        }
    }
    
    const cards = photoArray.map((photo, index) => {
        return (
            <React.Fragment key={index}>
                <Card 
                    $photo={photo} 
                    $index={startIndex - (index * 3) - 7} 
                    $faded={photoIndex <= index + 1 ? true : false} 
                />
            </React.Fragment>
      )});

    const descriptionText = (
        <div>
            { text }
            <Button><span>En Savoir Plus ...</span></Button>
        </div>
    )

    return [cards, descriptionText, photoIndex]
}