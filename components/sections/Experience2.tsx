import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Expericence </span>
								</div>
								<h3>
									+1
									<span className="text-300">year of </span>
									passion
									<span className="text-300">
										for <br />
										Quality Assurance
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="https://www.eshikhon.site/login" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/GoogleExp/Eshikh.png" alt="zelio"
													style={{ width: '50px', height: '50px' }}
													 />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">eShikhon.com</h5>
														<span className="text-300">2024 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="https://aabason.com/" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/GoogleExp/aabason.png" alt="zelio"
													style={{ width: '50px', height: '50px' }}
													 />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">Aabason</h5>
														<span className="text-300">2023 - 2024</span>
													</div>
												</div>
											</Link>
											<Link href="https://www.mges.global/" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/GoogleExp/MGES.png" alt="zelio"
													style={{ width: '50px', height: '50px' }}
													 />
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">MGES</h5>
														<span className="text-300">2023 - 2024</span>
													</div>
												</div>
											</Link>
											<Link href="https://hellosuperstars.com/" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<img src="assets/GoogleExp/Hellosuper.jpg" alt="zelio" 
													style={{ width: '50px', height: '50px' }}
													/>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">HelloSuperStars</h5>
														<span className="text-300">2010 - 2012</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Junior Software Quality Assurance Engineer</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3"> <span style={{ color: "white" }}>Ensured the</span> <span className="text-secondary-2">quality and performance</span> <span style={{ color: "white" }}> of scalable web applications, enhancing the user experience for millions of users.</span> </li>
											<li className="text-dark mb-3">Led testing and validation efforts to optimize application functionality and reliability.</li>
											<li className="text-dark mb-3">Led testing and validation efforts to optimize application functionality and reliability.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="https://www.atlassian.com/agile" className="text-300 border border-1 px-3 py-1">Agile Methodology</Link>
											<Link href="https://jmeter.apache.org/" className="text-300 border border-1 px-3 py-1">JMeter</Link>
											<Link href="https://www.postman.com/" className="text-300 border border-1 px-3 py-1">Postman</Link>
											<Link href="https://www.selenium.dev/documentation/" className="text-300 border border-1 px-3 py-1">Selenium</Link>
											<Link href="https://en.wikipedia.org/wiki/Jira_(software)#Description" className="text-300 border border-1 px-3 py-1">Jira</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
