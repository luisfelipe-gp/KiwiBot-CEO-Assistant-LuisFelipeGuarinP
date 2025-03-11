"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from './styles/styles.module.css';
import "./globals.css";
import { FaLocationDot } from "react-icons/fa6";
import Robot from "./_components/Robot";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import OrderButton from "./_components/OrderButton";
import Mobile from "./_components/_componentMobile/Mobile";


/* export default function Home() {
  const [lineas, setLineas] = useState([]);
  
  
  const carretera = document.querySelector('.carretera');
    
    // Generar líneas adicionales si es necesario
    function agregarLineas() {
      const lineas = document.querySelector('.lineas');
      const numLineas = Math.ceil(window.innerHeight / 100) + 1;
      
      lineas.innerHTML = '';
      
      for(let i = 0; i < numLineas; i++) {
        const linea = document.createElement('div');
        linea.className = 'linea';
        linea.style.top = (i * 100) + 'px';
        lineas.appendChild(linea);
      }
    }

    useEffect(() => {
      agregarLineas()
    }, []);
  

  


  

  return (
    <div className="relative h-[100vh] w-[100vw] bg-sky-200">
      <div className="carretera">
        <div className="lineasContainer">
          
          <div className="lineas">
            <div  className="linea top-[0]"></div>
            <div  className="linea top-[100px]"></div>
            <div  className="linea top-[200px]"></div>
            <div  className="linea top-[300px]"></div>
            <div  className="linea top-[400px]"></div>
            <div  className="linea top-[500px]"></div>
          </div>
        </div>
      </div>
      <div className="pasto">
        
      </div>

      
    </div>
  );
}
 */


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className="relative w-[100vw] h-[100vh] bg-sky-300">
      {/* <Robot/> */}
      <div className={`hidden lg:block  ${styles.phone}`}>
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
            <p className={`text-sm opacity-85`}>Como CEO assistant I'm gonna make sure I'm gonna get shit done, 
              but not only that I'll be something better, I'll be your CEO shadow, 
              I'll anticipate needs before they arise, absorb challenges like a shield, 
              and multiply your effectiveness while making you look even better. Consider 
              me your strategic doppelgänger who makes your vision executable.
            </p>
            <p className={`text-sm opacity-85 mb-8 inline-block`}>
              Secure your CEO Shadow today and experience the difference with a FREE 2-week trial!
               Let me demonstrate how I can transform your executive capacity. 
               If you're not completely satisfied, return your CEO
              Shadow with no shipping costs - 100% risk-free guarantee!
            </p>
            <OrderButton text="FREE 2-week trial"/>
          </div>
        </div>
      </div>
      {/* <div className={`hidden lg:block ${styles.berkeley} ${isHovered ? styles.hovered : ''}`}><FaLocationDot/><p>Berkeley</p></div>
      <div className={`hidden lg:block ${styles.city}`} onMouseOver={handleHover} onMouseOut={handleLeave}></div>
      <div className={`hidden lg:block ${styles.green}`}>
      </div>
      <div className={`hidden lg:block ${styles.road}`}>
      </div> */}
      <Mobile/>
    </div>
  );
}