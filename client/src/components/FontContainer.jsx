import React, { useEffect, useState, useRef, useCallback } from 'react';
import FontCard from './FontCard'


function FontContainer(props) {

    //State for API call
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [foundResults, setFoundResults] = useState([]);
    const [lastCard, setLastCard] = useState(0)
    const loadCards = 12;
    const observer = useRef();

    useEffect(() => {
        fetch("https://webfonts.googleapis.com/v1/webfonts?sort=POPULARITY&key=" + process.env.REACT_APP_API_KEY)
            .then(res => res.json())
            .then(
                (result) => {
                    //setItems(result.items.slice(0,10));
                    setItems(
                        // () =>
                        // result.items.map(item => ({
                        //     family: item.family, files: item.files
                        // }))
                        result.items
                    );
                    setLastCard(loadCards);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    const lastFontCardRef = useCallback(node => {
        if (!isLoaded) return;
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLastCard(prev => prev + 10)
                console.log("visible");
            }
        })
        if (node) observer.current.observe(node)
        console.log(node);
    }, [isLoaded]);
    //calling an API using useEffect

    function viewClass() {
        if (props.listView)
            return "container-grid grid-1"
        else
            return "container-grid";
    }

   

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (isLoaded) {
        const classes = viewClass();          
            return (
                <div className={classes}>
                    {items.filter(item => item.family.toLowerCase().indexOf(props.searchText.toLowerCase(), 0) !== -1).map((item, index) => {
                        if (index < lastCard)
                            if (index === lastCard - 1)
                                return (<FontCard
                                    useRef={lastFontCardRef}
                                    key={index}
                                    fontSize={props.fontSize}
                                    fontFamily={item.files.regular ? item.files.regular : item.files[Object.keys(item.files)[0]]}
                                    customText={props.customText}
                                    fontTitle={index}
                                />)
                            else
                                return (<FontCard
                                    key={index}
                                    fontSize={props.fontSize}
                                    fontFamily={item.files.regular ? item.files.regular : item.files[Object.keys(item.files)[0]]}
                                    customText={props.customText}
                                    fontTitle={item.family}
                                />)
                        else
                            return "";
                    }
                    )}
                </div>
            );    
    }
}
export default FontContainer;