import React from 'react';
import SearchInput from './SearchBarComponent/SearchInput'
import CustomTextInput from './SearchBarComponent/CustomTextInput';
import ResizeButton from './SearchBarComponent/ResizeButton';
import ResetButton from './SearchBarComponent/ResetButton'

function SearchBar(props) {

    return (
        <div className="container search-ctn">
            <SearchInput 
                onChangeText={props.onChangeSearchText}
                searchText={props.searchText}
            />
            <CustomTextInput
                onChangeText={props.onChangeCustomText}
                value={props.customText}
            />
            <ResizeButton 
                onChangeSize={props.onChangeFontSize}
                fontSize={props.fontSize}
            />
            <ResetButton 
                onReset={props.onReset}
            />
        </div>
    );
}
export default SearchBar;