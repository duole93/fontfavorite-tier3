import React, { useState } from 'react';

function FontCard(props) {

    const [isFontLoaded, setFontLoaded] = useState(false);
    let defaultText = "Almost before we knew it, we had left the ground.";

    let url = 'url(' + props.fontFamily + ')'
    var font = new FontFace(props.fontTitle, url);
    font.load()
        .then(function (loadedFont) {
            document.fonts.add(loadedFont);
            document.fonts.ready.then(function () {
                setFontLoaded(true);
            })
        })
        .catch(function (error) {
            return (<p>{error}</p>)
        });
    if (isFontLoaded) {
        let fontStyle = {
            fontSize: props.fontSize + "px",
            fontFamily: props.fontTitle
        }
        return (
            <a className="font-card" href="none" ref={props.useRef}>
                <h3 className="font-title">{props.fontTitle}</h3>
                <p className="font-test" style={fontStyle}>{props.customText === "" ? defaultText : props.customText}</p>
            </a>
        );
    }
    else {
        return (
            <a className="font-card" href="none">
                <h3 className="font-title">{props.fontTitle}</h3>
                <p className="font-test">{props.customText === "" ? defaultText : props.customText}</p>
            </a>
        );
    }
}
export default FontCard;

