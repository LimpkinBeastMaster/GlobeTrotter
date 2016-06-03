import React from 'react';
import { searchButton, searchBox, searchContainer } from '../stylesheets/style';

var SearchBar = (props) => (
	<div className='search-box' style={searchBox}>
		<button 
			className='btn btn-primary dropdown-toggle' 
			type="button" 
			data-toggle="dropdown" 
			style={searchButton}>
			Location
			<span className="carat">
			</span>
		</button>
	  <input 
	  	style={searchContainer} 
	  	type="text" 
	  	name="location-search" 
	  	placeholder="Find your next trip.." />
	</div>
);

export default SearchBar;