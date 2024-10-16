import React, {useEffect, useRef} from "react";
import {Link} from 'react-router-dom';
import me from '../public/images/fish.jpg';
import "./App.scss";

function App() {
    let cnv_ref = useRef(null);

    useEffect(() => {
        let cnv: HTMLCanvasElement = cnv_ref.current!;
        let ctx = cnv.getContext('2d')!;

        let w = (cnv.width = window.innerWidth);
        let h = (cnv.height = window.innerHeight);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 0.6;

        let dir_min = -Math.PI / 4 / 4;
        const dir_min_initial = -Math.PI / 4 / 4;
        const dir_min_final = -Math.PI / 4 / 1.8;

        handleScroll();
        window.addEventListener("scroll", function () {
            handleScroll();
        });

        function handleScroll() {
            const scr_top = window.scrollY;
            const scr_height = document.documentElement.scrollHeight - window.innerHeight;
            const scr_fraction = scr_top / scr_height;
            dir_min = calculateDirMin(scr_fraction);
            update();
        }

        function calculateDirMin(scroll_fraction: number) {
            return dir_min_initial + (dir_min_final - dir_min_initial) * scroll_fraction;
        }

        function update() {
            ctx.clearRect(0, 0, w, h);
            tree(w / 2, h / 2 + 850, -Math.PI / 2, 500, 12, dir_min);
        }

        function tree(x: number, y: number, dir: number, l: number, iteration: number, dir_m: number) {
            let x1 = x + Math.cos(dir) * l;
            let y1 = y + Math.sin(dir) * l;
            ctx.beginPath();
            ctx.moveTo(x, y + 0.5);
            ctx.lineTo(x1, y1 + 0.5);
            ctx.stroke();
            if (iteration >= 0) {
                tree(x1, y1, dir + dir_m, l / 1.5, iteration - 1, dir_m);
                tree(x1, y1, dir - dir_m, l / 1.5, iteration - 1, dir_m);
            }
        }
    }, []);

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
                        <p translate={'no'}>FullStack NodeJs Developer</p>
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
                    <div></div>
                </div>

                {/*<div className="skills-section">*/}
                {/*    <h2 className="section-title">Skills</h2>*/}
                {/*    <div className="info-skills">*/}
                {/*        <div className="info-box">*/}
                {/*            {Object.entries(skills).map(([category, skillsList]) => (*/}
                {/*                <div key={category} className="info-skills-inbox">*/}
                {/*                    <p className="info-paragraph">{category}</p>*/}
                {/*                    <div className="skills-content">*/}
                {/*                        {skillsList.map(skill => (*/}
                {/*                            <div className="skill" key={skill}>*/}
                {/*                                {skill}*/}
                {/*                            </div>*/}
                {/*                        ))}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="section skills-section">
                  <h2 className="section-title">Skills</h2>
                  <div className="info-skills">
                    <div className={'info-box'}>
                      <div className={'info-skills-inbox flex-direction-column'}>
                        <p className={'info-paragraph font-weight700'}>⚙️ Back-end</p>
                        <div className={'skills-content'}>
                          {`Pug, EJS, Express, AWS S3 bucket, NestJS, REST, MySQL, PostgreSQL, Redis, MongoDB, TypeORM, Prisma, Seeding, Auth: JWT; Passport; Basic etc., Telegram Bots, SSH, OpenAPI, Swagger, Bash, Docker Compose, Linux`
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
                            {`Git, SOLID, OpenAI API, Postman, Figma`
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


                <div className="section about-section">
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
                                    <p className={'info-text'}>Star Wars is a project that allows you to learn about any
                                        character,
                                        solar system, planet, starships, species, etc. Thanks to the Swagger API
                                        developer toolkit,
                                        you can also attach any image to an entity that stores a copy in the public
                                        folder for frontend
                                        and
                                        in
                                        an S3 bucket.
                                        Plans: to make a frontend for this API</p>
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

                <div className="section contact-section">
                    <h4 className="section-title">Contact</h4>
                    <div className="body-text">
                        <ul>
                        <li>
                                <Link to="https://www.linkedin.com/in/zahar-dubyna-6033612aa/">
                                    <svg
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <title>Linkedin icon</title>
                                        <path
                                            d={'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'}/>
                                    </svg>
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/zahardubyna">
                                    <svg role={"img"} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <title>Github icon</title>
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    Github
                                </Link>
                            </li>
                            <li>
                                <Link to="https://t.me/zahardubyna">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-name="Layer 1">
                                        <title>Telegram icon</title>
                                        <path
                                            d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                                    </svg>
                                    Telegram
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:zahdub@gmail.com">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="512"
                                        height="512"
                                        viewBox="0 0 512 512"
                                    >
                                        <title></title>
                                        <g id="icomoon-ignore"></g>
                                        <path
                                            d="M464 64h-416c-26.4 0-48 21.6-48 48v320c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-320c0-26.4-21.6-48-48-48zM199.37 275.186l-135.37 105.446v-250.821l135.37 145.375zM88.19 128h335.62l-167.81 126-167.81-126zM204.644 280.849l51.356 55.151 51.355-55.151 105.277 135.151h-313.264l105.276-135.151zM312.63 275.186l135.37-145.375v250.821l-135.37-105.446z"></path>
                                    </svg>
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
