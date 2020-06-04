import React from 'react';

import { PlayCircleFilled } from '@ant-design/icons';
import { truncateText } from '../../Functionalities/functionalities';

const PerResult: React.FC = ({ track, class_name }: any) => {
	console.log(class_name);
	return (
		<div key={track.id} className={`${class_name.col} p-3`}>
			<div className={`box ${class_name.layout}`}>
				<img
					src={track.album.cover_big}
					className='img-fluid'
					alt={track.album.title}
				/>
				<div className='flex_box'>
					<div>
						<h4 className='h3 text-center'>{truncateText(track.title)}</h4>
						<h6 className='text-center h6'>{track.artist.name}</h6>
					</div>
					<div className='d-flex'>
						<audio controls className='gi-audio' src={track.preview}>
							<PlayCircleFilled />
						</audio>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerResult;
