"use client"
import OrderButton from "../OrderButton";
import styles from "./styles.module.css";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import Robot from "../Robot";

export default function Mobile() {
    const [isHovered, setIsHovered] = useState(false);
    
      const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleLeave = () => {
        setIsHovered(false);
      };

    return(
        <div className={`overflow-y-scroll h-screen ${styles.componenteMovil}`}>
            <div className={`flex flex-col relative ${styles.contentRoad}`}>
                <div className="h-[43.6vh] bg-sky-300 flex-1/6 relative">
                    <div className={`${styles.berkeleyMobile} ${isHovered ? styles.hovered : ''}`}><FaLocationDot/><p>Berkeley</p></div>
                    <div className={styles.cityMobile} onMouseOver={handleHover} onMouseOut={handleLeave}></div>
                </div>
                <div className={`${styles.grass} h-[56.4vh] bg-green-500  z-10 relative overflow-y-hidden`}> 
                    <div className={`z-10 relative ${styles.roadMobile}`}>
                    </div>
                </div>
                <Robot/>
            </div>
            <div className={`h-[100vh] ${styles.sectionPhones}`}>
                <div className={`  ${styles.phone}`}>
                    <div className={styles.innerContent}>
                        <div className={styles.topPhone}>
                        </div>
                        <div className={styles.bottomPhone}>
                        </div>
                        <div className={`${styles.leftSection} overflow-auto`}>
                            <h1 className="text-2xl font-bold text-center">¿Has pedido un CEO assistant?</h1>
                            <h2 className="text-sm opacity-85 mb-1 mt-7">Luis Felipe Guarín Pastrana</h2>
                            <p className="text-sm opacity-85">Ciudad: Neiva, Huila, Colombia</p>
                            <p className="text-sm opacity-85">Teléfono: <a href="https://wa.me/+573164944460">+57 3164944460</a></p>
                            <p className="text-sm opacity-85">Email: luisfelipeguarinp@gmail.com</p>
                            <p className={`mt-8 text-sm opacity-85`}>Administrador de empresas / Desarrollador</p>
                            <p className={`mt-7 text-sm opacity-85`}>Desde startups disruptivas hasta proyectos de gran escala, encuentro en la tecnología la herramienta perfecta para materializar mis ambiciones emprendedoras y creativas.</p>
                            <div className={`text-2xl mt-3 mb-0 flex justify-around items-center`}>
                            <a href="https://www.linkedin.com/in/luisfelipeguarinpastrana-frontend-developer/" className={`${styles.button} ${styles.linkedin}`}><FaLinkedin className={`${styles.logo}`}/> <p className="text-sm opacity-85 font-semibold">Linkedin</p></a>
                            <a href="https://github.com/luisfelipe-gp" className={`${styles.button} ${styles.github}`}><FaGithubSquare className={`${styles.logo}`}/><p className="text-sm opacity-85 font-semibold">Github</p></a>
                            <a href="https://luisfelipeguarinp.netlify.app/" className={`${styles.button} ${styles.github}`}><FcBriefcase className={`${styles.logo}`}/><p className="text-sm opacity-85 font-semibold">Website</p></a>
                            </div>
                            <OrderButton text="Pedir tu Assistant"/>
                        </div>
                    </div>
                </div>
                <div className={`hidden lg:block ${styles.rightSection}`}>
                    <div className={`${styles.innerContent} `}>
                        <div className={styles.topPhone}>
                        </div>
                        <div className={styles.bottomPhone}>
                        </div>
                        <div className={`${styles.leftSection} overflow-auto`}>
                            <h2 className={`text-sm font-bold`}>Detalles del pedido:</h2>
                            <p className={`mt-3 text-sm opacity-85`}>
                            ¡Hola! Soy Luis Felipe, de Neiva, apasionado por los videojuegos, 
                            el cine y la tecnología. Comencé en administración de empresas y mi curiosidad
                            me llevó a aprender programación por mi cuenta. Como un rabbit hole llegué a Platzi, donde entré 
                            de lleno al mundo de las startups.
                            </p>
                            <p className={`text-sm opacity-85`}>
                            Eventualmente llegue a Afectus,donde lideré el desarrollo completo de la plataforma. 
                            Durante un año orqueste la transformacion de una empresa especialziada en  
                            administración de publicaciones en redes sociales en una entidad líder en la automatización de procesos de comunicación y la generación de campañas publicitarias y atención al cliente a través de WhatsApp.
                            Llegando a desarrollar productos
                            como la firma de contratos por WhatsApp, algo similar a 
                            Zapsign de Truora. Aunque tuvimos éxito internacional, 
                            no adquirimos clientes lo suficientemente rapido y al cabo de un año cerramos.
                            </p>
                            <p className={`text-sm opacity-85`}>
                            Me encantaria trabajar en kiwibot que mejor cosa que manejar
                            carros a control remoto que entregan atomos. jajaja literalmente 
                            es como un videojuego de adultos. 
                            </p>
                            <h2 className={`text-sm font-bold mt-6`}>Why me?</h2>
                            <p className={`text-sm opacity-85`}>Como CEO assistant I&apos;m gonna make sure I&apos;m gonna get shit done, 
                            but not only that I&apos;ll be something better, I&apos;ll be your CEO shadow, 
                            I&apos;ll anticipate needs before they arise, absorb challenges like a shield, 
                            and multiply your effectiveness while making you look even better. Consider 
                            me your strategic doppelgänger who makes your vision executable.
                            </p>
                            <p className={`text-sm opacity-85 mb-8 inline-block`}>
                            Secure your CEO Shadow today and experience the difference with a FREE 2-week trial!
                            Let me demonstrate how I can transform your executive capacity. 
                            If you&apos;re not completely satisfied, return your CEO
                            Shadow with no shipping costs - 100% risk-free guarantee!
                            </p>
                            <OrderButton text="FREE 2-week trial"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}