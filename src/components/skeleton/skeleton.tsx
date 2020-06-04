import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

const SkeletonComp = () => {
	const theme = useSelector((state: any) => state.theme);
	return (
		<div className='skeletonContainer'>
			<SkeletonTheme
				color={theme && 'rgba(27, 27, 27, 0.576)'}
				highlightColor={theme && '#1a1a1a'}>
				<div className={'skeleton-wrap'}>
					<Skeleton count={1} height={'323px'} width={'300px'} />
					<Skeleton count={1} height={'15px'} width={'223px'} />
					<Skeleton count={1} height={'10px'} width={'73px'} />
					<Skeleton count={1} height={'40px'} width={'283px'} />
				</div>
			</SkeletonTheme>
		</div>
	);
};

export default SkeletonComp;
