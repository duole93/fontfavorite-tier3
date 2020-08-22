import React, { useEffect, useState, useRef, useCallback } from 'react';
import FontCard from './FontCard'
import axios from 'axios';


function FontContainer(props) {

    //State for API call
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [lastCard, setLastCard] = useState(0)
    const loadCards = 12;
    const observer = useRef();

    //calling an API using useEffect
    useEffect(() => {
        axios.get('/font')
            .then(res => {
                setItems(res.data);
                setLastCard(loadCards);
                setIsLoaded(true);
            })
            .catch(function (error) {
                setIsLoaded(true);
                setError(error);
            })
    }, [])

    //load more card when browser detected the last loaded card
    const lastFontCardRef = useCallback(node => {
        if (!isLoaded) return;
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLastCard(prev => prev + loadCards)
            }
        })
        if (node) observer.current.observe(node)
        console.log(node);
    }, [isLoaded]);

    //Toggle Grid and List View
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
    }
    //Render card after loaded the font from API
    else if (isLoaded) {
        const classes = viewClass();
        const foundItems = items.filter(item => item.family.toLowerCase().indexOf(props.searchText.toLowerCase(), 0) !== -1);
        //console.log(foundItems.length);
        if (foundItems.length > 0)
            return (
                <div className={classes}>
                    {
                        foundItems.map((item, index) => {
                            if (index < lastCard)
                                //add ref to the last card loaded
                                if (index === lastCard - 1)
                                    return (<FontCard
                                        useRef={lastFontCardRef}
                                        key={index}
                                        fontSize={props.fontSize}
                                        fontFamily={item.url}
                                        customText={props.customText}
                                        fontTitle={index}
                                    />)
                                else
                                    return (<FontCard
                                        key={index}
                                        fontSize={props.fontSize}
                                        fontFamily={item.url}
                                        customText={props.customText}
                                        fontTitle={item.family}
                                    />)
                            else
                                return "";
                        })
                    }
                </div>
            );
        else
            return (
                <div class="container-not-found">¯\_(ツ)_/¯</div>
            )
    }
}
export default FontContainer;