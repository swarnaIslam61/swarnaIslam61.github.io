'use client'
import Link from 'next/link'
import CountUp from 'react-countup'


export default function Skills2() {
	return (
		<>

<section id="skills" className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 style={{color:"LightSeaGreen"}} className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
							I excel at transforming complex issues into streamlined, effective 
								<br className="d-md-block d-none" />
								solutions that boost user satisfaction and ensure quality.
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/skills/Mannual-Testing.jpg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Manual Testing</p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/jmeter.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={82} />%</h3>
									<p className="text-400 fw-medium text-uppercase">JMeter</p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/postman.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={76} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Postman</p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/selenium.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={58} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Selenium </p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/jira.jpg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={60} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Jira</p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/agile.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={82} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Agile Methodology</p>
								</div>
							</div>
							<div className="skills" style={{ width: '150px' }}>
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/swarna/sdlc.jpg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={93} />%</h3>
									<p className="text-400 fw-medium text-uppercase">SDLC</p>
								</div>
							</div>
						</div>
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">In addition, I have some programming knowledge such as: </p>
							<div className="d-flex justify-content-center gap-1">
								<Link href="https://en.wikipedia.org/wiki/HTML" className="fs-5 fw-bold">HTML,</Link>
								<Link href="https://en.wikipedia.org/wiki/CSS" className="fs-5 fw-bold">CSS,</Link>
								<Link href="https://en.wikipedia.org/wiki/JavaScript" className="fs-5 fw-bold">Javascript,</Link>
								<Link href="https://en.wikipedia.org/wiki/C%2B%2B" className="fs-5 fw-bold">C++</Link>
								{/* <Link href="/#" className="fs-5 fw-bold">TailwindCSS</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
