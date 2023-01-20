import React from 'react';

const Preloader = () => {
	return (
		<>
			<div id='preloader-active'>
				<div className='preloader '>
					<div className='logo jump'>
						<img
							className='w-1/2 ml-auto mr-auto mt-auto mb-auto'
							src='/assets/imgs/logos/EStack-circle-1.png'
							alt='Contractual'
						/>
						{/* <h1 className="text-lg font-semibold">Contractual</h1> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Preloader;
