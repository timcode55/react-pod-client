// import React, { useContext, useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import listenNotesPodcasts from '../../listennotes-array';
// import { PodcastContext } from '../../context/PodcastContext';

const CardList = (props) => {
	// const [ podcasts, setPodcasts ] = useContext(PodcastContext);
	// console.log(props, 'props ion cardlist');
	return (
		<div className="CardList">
			{listenNotesPodcasts ? listenNotesPodcasts.map((pod) => <Card key={pod.id} podcast={pod} />) : null}
		</div>
	);
};

export default CardList;
