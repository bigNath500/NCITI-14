import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as hiIcons from 'react-icons/hi'
import newsImg from '../../Assets/Images/NewsImg.jpg'

const Index = () => {
  return (
    <>
        <main>
            <section className='speaker_banner'>
                <Container>
                    <h1 className='text-white fw-bold'>News</h1>
                    <h6 className='text-white'>
                        <Link to={'/'} className="text-white text-decoration-none">Home</Link> / News / FG Committed to the Development and Growth of MSMEs in Nigeria – EDET
                    </h6>
                </Container>
            </section>

            <section className='news_content'>
                <Container>
                    <h1 className='fw-bold text-dark text-center'>FG Committed to the Development and Growth of MSMEs in Nigeria – EDET</h1>

                    <div className="text-center d-flex justify-content-center">
                        <span className='justify-content-center align-items-center'>
                            <hiIcons.HiOutlineUser className='me-1 text-danger' /> SALISU DANJUMA
                        </span>

                        <span className='ms-1 justify-content-center align-items-center'>
                            <hiIcons.HiOutlineClock className='me-1 text-danger' /> DECEMBER 5, 2019
                        </span>

                        <span className='ms-1 justify-content-center align-items-center'>
                            <hiIcons.HiOutlineFolder className='me-1 text-danger' /> News
                        </span>
                    </div>

                    <div className="mt-4 ms-lg-5 me-lg-5">
                        <div>
                            <img src={newsImg} width="100%" alt="NCITI news" />
                        </div>

                        <div className="mt-3 text-muted">
                            <p>
                                The Permanent Secretary, Federal Ministry of Industry, Trade and Investment, Mr. Edet Sunday Akpan has said that the present administration was committed to the development  and  growth of the Micro, Small  and Medium Enterprises (MSMEs) as an engine of economic development in Nigeria.
                            </p>

                            <p className="mt-3">
                                He stated this while declaring open the Technical session of the 11th Meeting of the National Council on Industry, Trade and Investment (NCITI), with the theme <b>
                                “The role of Small and Medium Businesses in Poverty Alleviation in Nigeria: The Way Forward”</b> holding in Uyo,  Akwa Ibom  State.
                            </p>

                            <p className="mt-3">
                                Mr. Edet said that the theme for this year’s Council was apt and in tandem with the commitment  of President Buhari Next Level Agenda to address critical economic challenges confronting the country and the set target of lifting one hundred million Nigerians out of poverty in the next 10 years.
                            </p>

                            <p className="mt-3">
                                According to the Permanent Secretary, “ The Federal Ministry of Industry, Trade and Investment whose vision is to promote economic growth, create jobs and generate wealth is pursuing the mandate of boosting the development of Micro, Small and Medium Enterprises (MSMEs), as engine of economic development  in Nigeria”.
                            </p>

                            <p className="mt-3">
                                Mr. Edet noted that “The Small and Medium Scale Enterprises as engine of growth contributes almost half of Nigeria’s Gross Domestic Product (GDP). In realization of this positive impact, Government  has put in place various measures towards strengthening  Small and Medium  Businesses  as bedrock of industrialization, job creation and poverty alleviation in Nigeria”
                            </p>

                            <p className="mt-3">
                                He further  disclosed that  some of the strategic measures that Government  has put in place to strengthen  MSMEs development in Nigeria  included sustained  efforts to build  capacity; increased access to finance and eliminating  of bottlenecks  in the conduct of businesses.
                            </p>

                            <p className="mt-3">
                                He stated that the key interventions  in the MSMEs subsector included, National Policy on MSMEs; Promotion and facilitation of the Development of One Local Government  , One Product ( OLOP) for MSMEs; National Enterprise Development  Programme; Conditional  Grant  Scheme (CGS); Industrial  Development  Centres; African Development  Bank Initiative and National Industrial  Skills Development  Programme  ( NISDP) among others.
                            </p>

                            <p className="mt-3">
                                Earlier in his welcome address, the Commissioner of Akwa Ibom Ministry of Commerce and Industry, Prince Ukpong Akpabio stated that the Akwa Ibom State government under his Completion Agenda Programme was desirous of raising at least 30,000 viable Small and Medium Enterprises (SMEs) before 2023.
                            </p>

                            <p className="mt-3">
                                Prince Ukpong pointed out that healthy SMEs possessed the competence to create wealth, a middle class with redistributable income and promote the sustainable economic growth, transformation and prosperity of the country.
                            </p>

                            <p className="mt-3">
                                Akpabio said the Governor had recently approved IBOM 3000 project as an operational scheme to identify and train 3000 SME beneficiaries drawn across the 3 Senatorial districts of the state.
                            </p>

                            <p className='mt-3'>
                                The Permanent Secretary, Akwa Ibom State Ministry of Commerce and Industry, Mr. Oliver Udom disclosed that his Ministry was driving the vehicle of the Industrialization Agenda of Governor Udoh Gabriel Emmanuel, emphasizing that, through the One LGA One Product Campaign, his Ministry would encourage all 31 Local Government Areas of the state to establish Enterprise Development Centers (EDCs) to promote local industry, create jobs, enterprises and indigenous innovations.
                            </p>

                            <p className="mt-3">
                                The Director, Policy, Planning, Research and Statistics (PPR&S),Federal Ministry of Industry, Trade and Investment, Babura Tijjani Inuwa in his vote of thanks expressed his profound gratitude to all stakeholders for their tremendous support and assistance in the course of organizing the event.
                            </p>

                            <p className="mt-3">
                                It would be recalled that the National Council on Industry, Trade and Investment is the highest policy advisory body in the sector under the chairmanship of the Minister to congregate, brainstorm, strategize and formulate policies and programmes aimed at addressing different challenges facing the sector.
                            </p>

                            <p className='mt-3'>
                                <b>Oluwakemi Ogunmakinwa Mrs.</b>
                                <div className="mt-1">
                                    <i>For: Deputy Director Press</i>
                                </div>
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    </>
  )
}

export default Index