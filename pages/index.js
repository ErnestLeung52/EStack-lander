import CounterUp from '../components/elements/Counterup';
import TextEffect from '../components/elements/TextEffect';
import Layout from '../components/layout/Layout';
import Slider2 from '../components/slider/Slider2';

function Home() {
	return (
		<>
			<Layout>
				<section
					className='xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24'
					id='top'
					style={{
						backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
					}}
				>
					<div className='container px-4 mx-auto'>
						<div className='pt-12 text-center'>
							<div className='max-w-3xl mx-auto mb-8'>
								<h2 className='text-xl lg:text-3xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn'>
									"Everybody should learn to program a computer because it
									teaches you how to think."
									<br />
									<span className='text-blue-500'>– Steve Jobs</span>
								</h2>
								<p className='text-blueGray-400 text-lg leading-relaxed wow animate__animated animate__fadeIn'>
									<strong className='text-blue-500'>Innovative </strong>
									experience to learn{' '}
									<span className='typewrite d-inline text-brand'>
										<TextEffect
											text1='Software Engineering'
											text2='Web Developmenet'
											text3='Web UI Design'
											text4='Data Structure'
											text5='System Design'
										/>
									</span>
								</p>
							</div>
							<div>
								<a
									className='btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2'
									href='#program'
								>
									Programs
								</a>
								<a
									className='btn-white wow animate__animated animate__fadeIn hover-up-2'
									data-wow-delay='.3s'
									href='#download'
								>
									Contact
								</a>
							</div>
						</div>
					</div>
					<div className='relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto'>
						<img src='/assets/imgs/elements/pattern.png' alt='Contractual' />
						<div
							className='absolute'
							style={{ top: '9%', left: '14%', width: '72%', height: '66%' }}
						>
							<img
								className='rounded wow animate__animated animate__fadeIn'
								src='/assets/imgs/placeholders/mbp-backlog.png'
								alt='Contractual'
							/>
						</div>
					</div>
					{/* <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={950} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={58} time={3} />
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading"> k </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={500} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={300} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
				</section>

				<section
					className='pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden'
					id='key-features'
				>
					<div className='container px-4 mx-auto'>
						<div className='flex flex-wrap lg:flex-nowrap'>
							<div className='w-full lg:w-1/2'>
								<div
									className='lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn'
									data-wow-delay='.3s'
								>
									<div className='mb-4'>
										<span
											className='text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown'
											data-wow-delay='.9s'
										>
											What makes EStack Sutdio stand out?
										</span>
										<h2
											className='text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn'
											data-wow-delay='.3s'
										>
											Competitive Advantage
										</h2>
									</div>
									<div
										className='flex items-start py-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										<div className='w-8 mr-5 text-blue-500'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												stroke-width='2'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
												/>
											</svg>
										</div>
										<div>
											<h3 className='mb-2 text-xl font-semibold font-heading'>
												Learning one-on-one is effective.
											</h3>
											<p className='text-blueGray-400 leading-tight'>
												From day one, we have held that belief. But we also
												understood that technology would function more
												effectively if it were available, inexpensive, and more
												practical for everyone. So that's what we've created—a
												simpler approach to link those in need of knowledge with
												those who can impart it. And in the process, we've
												altered how people view education.
											</p>
										</div>
									</div>
									<div
										className='flex items-start py-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.7s'
									>
										<div className='w-8 mr-5 text-blue-500'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												stroke-width='2'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										</div>
										<div>
											<h3 className='mb-2 text-xl font-semibold font-heading'>
												Flexibility with accountability
											</h3>
											<p className='text-blueGray-400 leading-tight'>
												You will receive all the help you require thanks to our
												dual mentoring concept. You will be assigned a tutor—an
												experienced web developer who will grade your
												assignments within 24 hours of submission—and a mentor—a
												professional in the web development field who will
												provide in-depth written, video, and on-call feedback on
												your portfolio pieces.
											</p>
										</div>
									</div>
									<div
										className='flex items-start py-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.9s'
									>
										<div className='w-8 mr-5 text-blue-500'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												stroke-width='2'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
												/>
											</svg>
										</div>
										<div>
											<h3 className='mb-2 text-xl font-semibold font-heading'>
												Unparalleled Support
											</h3>
											<p className='text-blueGray-400 leading-loose'>
												We are a diligent, sympathetic, and cooperative group.
												Supporting people is at the center of what we do,
												including helping our residents, prospective students,
												self-learners, and one another. We have assembled a
												group of great individuals that are united by our goal.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='relative w-full lg:w-1/2 my-12 lg:my-0'>
								<div
									className='wow animate__animated animate__fadeIn'
									data-wow-delay='.5s'
								>
									<img
										className='relative mx-auto rounded-xl w-full z-10'
										src='/assets/imgs/placeholders/screen-contract.png'
										alt='Monst'
									/>
									<img
										className='absolute top-0 left-0 w-40 -ml-12 -mt-12'
										src='/assets/imgs/elements/blob-tear.svg'
										alt='Monst'
									/>
									<img
										className='absolute bottom-0 right-0 w-40 -mr-12 -mb-12'
										src='/assets/imgs/elements/blob-tear.svg'
										alt='Monst'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='py-20 bg-blueGray-50' id='program'>
					<div className='container px-4 mx-auto'>
						<div className='flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12'>
							<div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
								<h2 className='text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown'>
									<span>Online</span>
									<span className='text-blue-500'> one-on-one tutoring</span>
									<br />
									<span>+ supportive community</span>
								</h2>
							</div>
							<div className='w-full lg:w-1/2'>
								<p className='text-blueGray-400 leading-loose wow animate__animated animate__fadeIn'>
									<span className='font-bold'>WHY CHOOSE US? </span>
									<br />
									Estack provides comprehensive resources for aspiring engineers
									at all stages of their coding journey. Explore the variety of
									engaging offerings below to get excited about coding in a
									supportive and collaborative community. Only pay for the time
									you require. There are no subscriptions or up-front payments.
									Just satisfactory outcomes.
								</p>
							</div>
						</div>
						<div className='flex flex-wrap -mx-3 -mb-6 text-center'>
							<div
								className='hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn'
								data-wow-delay='.3s'
							>
								<div className='p-12 bg-white shadow rounded'>
									<div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
										1
									</div>
									<img
										className='h-36 mx-auto my-4'
										src='/assets/imgs/illustrations/podcast.svg'
										alt='Monst'
									/>
									<h3 className='mb-2 font-bold font-heading text-xl'>
										JavaScript + HTML + CSS
									</h3>
									<p className='text-sm text-blueGray-400 leading-relaxed'>
										<strong>$30.00 / hour </strong>
										<br />
										This introductory program aims to build your core JavaScript
										knowledge, improve your technical communication, and develop
										your engineering toolkit.
									</p>
								</div>
							</div>
							<div
								className='hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn'
								data-wow-delay='.5s'
							>
								<div className='p-12 bg-white shadow rounded'>
									<div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
										2
									</div>
									<img
										className='h-36 mx-auto my-4'
										src='/assets/imgs/illustrations/space.svg'
										alt='Monst'
									/>
									<h3 className='mb-2 font-bold font-heading text-xl'>
										Real Life Projects
									</h3>
									<p className='text-sm text-blueGray-400 leading-relaxed'>
										<strong>$30.00 / hour </strong> <br />
										The Real Life Program teaches full-stack JavaScript, UI/UX
										design computer science to prepare you to deploy real life
										applications to the world.
									</p>
								</div>
							</div>
							<div className='hover-up-5 w-full lg:w-1/3 px-3 mb-6'>
								<div
									className='p-12 bg-white shadow rounded wow animate__animated animate__fadeIn'
									data-wow-delay='.7s'
								>
									<div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
										3
									</div>
									<img
										className='h-36 mx-auto my-4'
										src='/assets/imgs/illustrations/tasks.svg'
										alt='Monst'
									/>
									<h3 className='mb-2 font-bold font-heading text-xl'>
										Interviews Prep
									</h3>
									<p className='text-sm text-blueGray-400 leading-relaxed'>
										<strong>$54.00 / hour </strong> <br />
										This program helps you to master data structures and
										algorithms, perfect your engineering resume and source more
										technical interviews through live workshops and 1-on-1's.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='py-12 md:py-20'>
					<div className='container'>
						<div className='flex flex-wrap -mx-3'>
							<div className='relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left'>
								<div className='max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0'>
									<h2
										className='text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated'
										data-wow-delay='.3s'
									>
										Simple, <span className='text-blue-500'>intuitive,</span>{' '}
										engaging
									</h2>
									<p
										className='text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn'
										data-wow-delay='.9s'
									>
										<span className='font-bold'>
											Is this program right for me?{' '}
										</span>{' '}
										<br />
										With several courses to choose from, it can be difficult to
										determine which one is the best fit for your schedule and
										preferences. Speak with our agent to find out more.
									</p>
								</div>
								<div
									className='lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn'
									data-wow-delay='.5s'
								>
									<div id='carausel-fade-1-arrows' className='flex'></div>
								</div>
							</div>
							<div
								className='w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn'
								data-wow-delay='.5s'
							>
								<div className='relative w-full rounded'>
									<div
										className='carausel-fade slick-carausel rounded'
										id='carausel-fade-1'
									>
										<Slider2 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className='py-20' id='download'>
					<div className='container'>
						<div className='flex flex-wrap -mx-8'>
							<div className='w-full lg:w-1/2 px-8'>
								<div className='mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0'>
									<h2
										className='mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn'
										data-wow-delay='.1s'
									>
										Download Contractual for{' '}
										<span className='text-blue-600'>Windows or Mac</span> Your
										machine. Your choice.
									</h2>
									<p
										className='mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn'
										data-wow-delay='.3s'
									>
										Teams are diverse, and so are the devices powered by them.
										Whether your machine runs on Windows or Mac, we have the
										exact version you need.
									</p>
									<a
										href='https://github.com/oslabs-beta/contractual/releases/download/v1.0.0-beta/Mac-Contractual-1.0.0.dmg'
										className='inline-block text-xs py-4 px-8 mr-2 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										Mac
									</a>
									<a
										href='https://github.com/oslabs-beta/contractual/releases/download/v1.0.0-beta/Win-Contractual.Setup.1.0.0.exe'
										className='inline-block text-xs py-4 px-8 mr-2 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										Windows
									</a>
									<a
										href='https://github.com/oslabs-beta/contractual/releases/download/v1.0.0-beta/Linux-contractual_1.0.0_amd64.deb'
										className='inline-block text-xs py-4 px-8 mr-2 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										Linux [deb]
									</a>
									<a
										href='https://github.com/oslabs-beta/contractual/releases/download/v1.0.0-beta/Linux-contractual-1.0.0.x86_64.rpm'
										className='inline-block text-xs py-4 px-8 mr-2 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										Linux [rpm]
									</a>
									<iframe
										className='mt-5'
										src='https://ghbtns.com/github-btn.html?user=oslabs-beta&repo=contractual&type=star&count=true&size=large'
										frameborder='0'
										scrolling='0'
										width='170'
										height='30'
										title='GitHub'
									></iframe>
								</div>
							</div>
							<div className='w-full lg:w-1/2 px-8'>
								<ul className='space-y-12'>
									<li
										className='flex -mx-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.3s'
									>
										<div className='px-4'>
											<span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600'>
												1
											</span>
										</div>
										<div className='px-4'>
											<h3 className='my-4 text-xl font-semibold'>Download</h3>
											<p className='text-blueGray-400 leading-loose'>
												After selecting your preferred OS, the download will
												begin.
											</p>
										</div>
									</li>
									<li
										className='flex -mx-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.5s'
									>
										<div className='px-4'>
											<span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600'>
												2
											</span>
										</div>
										<div className='px-4'>
											<h3 className='my-4 text-xl font-semibold'>Configure</h3>
											<p className='text-blueGray-400 leading-loose'>
												Pointing your frontend fetch requests at localhost
												Port1234 allows Contractual to function as your backend.
											</p>
										</div>
									</li>
									<li
										className='flex -mx-4 wow animate__animated animate__fadeIn'
										data-wow-delay='.7s'
									>
										<div className='px-4'>
											<span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600'>
												3
											</span>
										</div>
										<div className='px-4'>
											<h3 className='my-4 text-xl font-semibold'>Build</h3>
											<p className='text-blueGray-400 leading-loose'>
												With setup complete, you’re free to define APIs from the
												contract builder and start coding!
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section> */}
				<section
					className='py-20 xl:bg-contain bg-top bg-no-repeat'
					id='team'
					style={{
						backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
					}}
				>
					<div className='container px-4 mx-auto'>
						<div className='text-center mb-16'>
							<h2
								className='max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn'
								data-wow-delay='.2s'
							>
								<span>Learn , Contribute, and</span>
								<span className='text-blue-500'> Build Communities</span>
								<span>.</span>
							</h2>
							<p
								className='max-w-lg mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown'
								data-wow-delay='.5s'
							>
								EStack Studio cultivates engineers, not technicians. <br></br>
								<strong>
									Our instruction methodology of block-driven development allows
									residents to become autonomous engineers.
								</strong>
							</p>
						</div>
						<div className='flex flex-wrap flex-row -mx-3 justify-center'>
							<div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
								<div
									className='hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn'
									data-wow-delay='.2s'
								>
									<img
										className='h-20 mb-6 mx-auto'
										src='/assets/imgs/people/Ernest.png'
										alt='Monst'
									/>
									<h3 className='text-4xl font-bold font-heading'>Ernest</h3>
									<span className='text-4xl text-blue-500 font-bold font-heading'>
										LEUNG
									</span>
									<p className='mt-2 mb-8 text-blueGray-400'>
										"Own equity, gain financial freedom."
									</p>
									{/* <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>3 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>10 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div> */}
									<div>
										<a
											className='block py-4 px-6 mb-4 sm:mb-4 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded'
											href='https://www.linkedin.com/in/ernestleung52/'
											target='_blank'
										>
											LinkedIn
										</a>
										<a
											className='block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded'
											href='https://github.com/ErnestLeung52'
											target='_blank'
										>
											Github
										</a>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-1/4 px-3 mb-6'>
								<div
									className='hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn'
									data-wow-delay='.2s'
								>
									<img
										className='h-20 w-20 mb-6 mx-auto'
										src='/assets/imgs/people/Eurone.png'
										alt='Monst'
									/>
									<h3 className='text-4xl font-bold font-heading'>Eurone</h3>
									<span className='text-4xl text-blue-500 font-bold font-heading'>
										Lau
									</span>
									<p className='mt-2 mb-8 text-blueGray-400'>
										"console.log(“what you looking at”);"
									</p>
									{/* <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>3 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>10 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div> */}
									{/* <div>
										<a
											className='block py-4 px-6 mb-4 sm:mb-4 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded'
											href='https://www.linkedin.com/in/gjenga/'
											target='_blank'
										>
											LinkedIn
										</a>
										<a
											className='block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded'
											href='https://github.com/gdelaselva'
											target='_blank'
										>
											Github
										</a>
									</div>
								</div>
							</div>
							<div className='w-full lg:w-1/4 px-3 mb-6'>
								<div
									className='hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn'
									data-wow-delay='.6s'
								>
									<img
										className='h-20 mb-6 mx-auto'
										src='/assets/imgs/people/Joe.png'
										alt='Monst'
									/>
									<h3 className='text-4xl font-bold font-heading'>Joe</h3>
									<span className='text-4xl text-blue-500 font-bold font-heading'>
										AMOS
									</span>
									<p className='mt-2 mb-8 text-blueGray-400'>
										"Long term gains, with long term people."
									</p> */}
									{/* <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>12 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>8 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div> */}
									{/* <div>
										<a
											className='block py-4 px-6 mb-4 sm:mb-4 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded'
											href='https://www.linkedin.com/in/joe-amos/'
											target='_blank'
										>
											LinkedIn
										</a>
										<a
											className='block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded'
											href='https://github.com/joeamos'
											target='_blank'
										>
											Github
										</a>
									</div>
								</div>
							</div>
							<div className='w-full lg:w-1/4 px-3 mb-6'>
								<div
									className='hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn'
									data-wow-delay='.6s'
								>
									<img
										className='h-20 mb-6 mx-auto'
										src='/assets/imgs/people/Yankun.png'
										alt='Monst'
									/>
									<h3 className='text-4xl font-bold font-heading'>Yankun</h3>
									<span className='text-4xl text-blue-500 font-bold font-heading'>
										SONG
									</span>
									<p className='mt-2 mb-8 text-blueGray-400'>
										"Specific knowledge, accountability, leverage."
									</p> */}
									{/* <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>12 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>8 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div> */}
									<div>
										<a
											className='block py-4 px-6 mb-4 sm:mb-4 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded'
											href='https://www.linkedin.com/in/'
											target='_blank'
										>
											LinkedIn
										</a>
										<a
											className='block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded'
											href='https://github.com/'
											target='_blank'
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span>Subscribe now to</span>
                                    <span className="text-blue-500"> Our Newsletter </span>
                                    <span>and get the Coupon code.</span>
                                </h2>
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    All your information is completely confidential
                                </p>
                                <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                    </div>
                                    <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
			</Layout>
		</>
	);
}
export default Home;
