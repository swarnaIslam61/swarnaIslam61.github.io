
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/swarna/swarnaa.png" alt="zelio" />
										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="zelio" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="d-flex align-items-center" style={{ color: "white" }}>
											&lt;span&gt;
											<div>
												<div className="typewriter">
													<h1
														className="fs-6 fw-medium">Hey, I’m Mansura Islam Swarna</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">
											Software Quality Assurance Engineer <br />
											<span className="text-linear-4">{'('}SQA{')'}</span>

											<span className="flicker">
												_
											</span>
										</h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span style={{ color: "white" }} className="text-white">With expertise in manual and automated testing using tools like </span> <span className="text-secondary-2">JMeter</span>, <span className="text-secondary-2">Postman</span>, <span className="text-secondary-2">Selenium</span><span style={{ color: "white" }} className="text-white">... I ensure software quality and reliabilityas.  I deliver thorough testing solutions that guarantee robust, user-centered applications.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/swarna/selenium.png" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/swarna/jmeter.png" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/swarna/jira.jpg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/swarna/clickup.png" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/swarna/postman.png" alt="brand" />
															</Link>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<Link href="assets/cv/Mansura ISlam Swarna.pdf" className="btn me-2 text-300 ps-0 mt-4" target="_blank">
											<i className="ri-download-line text-primary-2" />

											[ Download my CV ]

										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>

		</>
	)
}
