import React, {useRef, useState} from "react";
import {Link} from 'react-router-dom';
import me from '../public/images/avatars/fish.jpg';
import Logos from './common/config/logos';
import Tree from "./components/Tree/Tree";

import "./App.scss";


function App() {
    let cnv_ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    Tree(cnv_ref)

    return (
        <div>
            <canvas ref={cnv_ref} className={'cnv_tree'}></canvas>
            <div className="card-container">
                <div className={'header-container'}>
                    <div className={"name-container"}>
                        <div id="img-container">
                            <img id="portrait" src={me} alt={'me'}/>
                        </div>
                        <h2 translate={'no'}>Zahar Dubyna</h2>
                        <p translate={'no'}>Full-Stack Developer</p>
                        <div className={'contacts'}>
                            <Link to="https://www.linkedin.com/in/zahar-dubyna-6033612aa/">
                                <Logos.Linkedin />
                            </Link>

                            <Link to="https://github.com/zahardubyna">
                                <Logos.Github />
                            </Link>

                            <Link to="mailto:zahdub@gmail.com" onClick={() => setHovered(false)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                {hovered ? <Logos.EmailOpen /> : <Logos.Email />}
                            </Link>
                        </div>
                    </div>

                    <div className={'info-container'}>
                        <div className={'info-box height10vw'}>
                            <div className={'info-inbox'}>
                                <div className={'info-content padding'}>
                                    <p className={'info-paragraph font-weight600'}>🌎 Location</p>
                                    <p className={'info-text'}>Kropivnitskiy, Ukraine</p>
                                </div>
                            </div>
                            <div className={'info-inbox'}>
                                <div className={'info-content padding'}>
                                    <p className={'info-paragraph font-weight600'}>💻 Coding on</p>
                                    <p className={'info-text'}>Macbook pro 15" i7 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className={'info-box height10vw'}>
                            <div className={'info-inbox'}>
                                <div className={'info-content padding'}>
                                    <p className={'info-paragraph font-weight600'}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 64 64">
                                            <path fill="#2e3192"
                                                  d="M38 54h16c1.977 0 3.657-.446 5.052-1.223L38 40.219zm25.66-7.79c.228-1.017.344-2.094.344-3.211v-5h-14.11l13.762 8.211M.35 17.759A14.6 14.6 0 0 0 0 21v5h14.164zM26 10H10c-1.963 0-3.632.44-5.021 1.206L26 23.746zM5.043 52.826C6.419 53.57 8.066 54 10 54h16V40.324zM0 38v5c0 1.151.122 2.26.363 3.303L14.282 38zm59.115-26.745C57.709 10.457 56.006 10 54 10H38v13.851zM64 26v-5c0-1.094-.113-2.149-.332-3.147L50.012 26z"/>
                                            <path fill="#e6e7e8"
                                                  d="m50.012 26l13.656-8.147c-.626-2.864-2.15-5.235-4.553-6.598L38 23.851V10h-2v18h28v-2zM0 36v2h14.282L.363 46.303c.661 2.855 2.231 5.199 4.68 6.523L26 40.324V54h2V36zm64 0H36v18h2V40.219l21.052 12.559c2.421-1.348 3.964-3.706 4.604-6.566L49.894 38H64zM26 10v13.746L4.979 11.206C2.549 12.546.996 14.9.349 17.759L14.164 26H0v2h28V10z"/>
                                            <path fill="#be1e2d" d="M36 28V10h-8v18H0v8h28v18h8V36h28v-8z"/>
                                            <path fill="#be1e2d"
                                                  d="M21.938 26L1.888 14.031c-.431.64-.777 1.344-1.063 2.094L17.372 26h4.563M63.09 48.09L46.277 38h-4.656l20.313 12.219a10 10 0 0 0 1.156-2.125m-2.371-35.703L37.969 26l4.619.003L62.219 14.25c-.438-.797-.9-1.311-1.5-1.859M1.813 49.875a9 9 0 0 0 1.609 1.844L26.063 38H21.5z"/>
                                        </svg> English
                                    </p>
                                    <p className={'info-text'}>B1 (Intermediate)</p>
                                </div>
                            </div>
                            <div className={'info-inbox'}>
                                <div className={'info-content padding'}>
                                    <p className={'info-paragraph font-weight600'}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 64 64">
                                            <path fill="#1b75bb"
                                                  d="M54 10H10C3.373 10 0 14.925 0 21v11h64V21c0-6.075-3.373-11-10-11"/>
                                            <path fill="#f9cb38"
                                                  d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V32H0z"/>
                                        </svg> Ukrainian
                                    </p>
                                    <p className={'info-text'}>Native</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                  <h2 className="section-title">Skills</h2>
                  <div>
                    <div className={'info-box'}>
                      <div className={'info-skills-inbox flex-direction-column'}>
                        <p className={'info-paragraph font-weight700'}>⚙️ Back-end</p>
                        <div className={'skills-content'}>
                          {`Pug, EJS, Express, AWS S3 bucket, NestJS, REST, MySQL, PostgreSQL, Redis, MongoDB, TypeORM, Prisma, Seeding, Auth: JWT; Passport; Basic etc., Telegram Bots, SSH, OpenAPI, Swagger, Docker Compose`
                              .split(', ')
                              .map((skill) => (
                                  <div className={'skill'} key={skill}>
                                    {skill}
                                  </div>
                              ))}
                        </div>
                      </div>
                      <div className={'info-box flex-direction-column'}>
                        <div className={'info-skills-inbox flex-direction-column'}>
                          <p className={'info-paragraph font-weight700'}>🌳 Front-end</p>
                          <div className={'skills-content'}>
                            {`Html, Css, React, TypeScript, JavaScript, Canvas, Redux, JQuery, Bootstrap, Vite`
                                .split(', ')
                                .map((skill) => (
                                    <div className={'skill'} key={skill}>
                                      {skill}
                                    </div>
                                ))}
                          </div>
                        </div>
                        <div className={'info-skills-inbox flex-direction-column'}>
                          <p className={'info-paragraph font-weight700'}>🌱 Supportive skills</p>
                          <div className={'skills-content'}>
                            {`Git, SOLID, OpenAI API, Postman, Figma, Bash`
                                .split(', ')
                                .map((skill) => (
                                    <div className={'skill'} key={skill}>
                                      {skill}
                                    </div>
                                ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section border-radius-bottom">
                    <h2 className="section-title">Projects</h2>
                    <div>
                        <div>
                            <div className={'info-inbox cursor-pointer margin-bottom'} onClick={() => {
                                window.open('https://github.com/zahardubyna/4-backend')
                            }}>
                                <img className={'project-icon padding'}
                                     src="https://img.icons8.com/?size=100&id=lYpJCJN3hGwm&format=png&color=000000"
                                     alt="starwars"/>
                                <div className={'info-content padding height'}>
                                    <p className={'info-paragraph font-weight700 font-size20px'}>🌟 StarWars API</p>
                                    <p className={'info-text'}>This project is a NestJS-based backend application designed to manage and process Star Wars API (SWAPI) data, storing it in a structured database. It includes data parsing, migration handling, and relationship mapping to efficiently organize and query Star Wars universe entities such as films, characters, planets, species, starships, and vehicles.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={'info-inbox cursor-pointer margin-bottom'} onClick={() => {
                                window.open('https://github.com/zahardubyna/bio')
                            }}>
                            <img className={'project-icon padding'}
                                     src="https://img.icons8.com/?size=100&id=VYbFkFCTRWLV&format=png&color=000000"
                                     alt="home"/>
                                <div className={'info-content padding height'}>
                                    <p className={'info-paragraph font-weight700 font-size20px'}>🌳 My Bio</p>
                                    <p className={'info-text'}>Page about me,
                                        my projects, my experience, written in ReactJs</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
