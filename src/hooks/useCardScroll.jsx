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
        if (photoIndex >= 1 && photoIndex < nbPhotos) {
            if (e.deltaY > 0) {
                setPhotoIndex(photoIndex + 1);
                setText(description(photoIndex + 1));
            } else if (photoIndex !== 1) {
                setPhotoIndex(photoIndex - 1);
                setText(description(photoIndex - 1));
            } else {
                setPhotoIndex(nbPhotos);
                setText(description(nbPhotos));
            }
        }
        else if (photoIndex === nbPhotos && e.deltaY < 0) {
            setPhotoIndex(photoIndex - 1);
            setText(description(photoIndex - 1));
        }
        else if (photoIndex === nbPhotos && e.deltaY > 0) {
            setPhotoIndex(1);
            setText(description(1));
        }
    }
    
    const cards = photoArray.map((photo, index) => {
        return (
            <React.Fragment key={index}>
                <Card 
                    $photo={photo} 
                    $index={startIndex - (index * 5)} 
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