import React, { useContext } from "react"
import { backgroundContext } from "../Context/BackgroundContext"
import proyectmodel from "../assets/proyectosimg/proyectmodel.png"
import proyectomemorycard from '../assets/proyectosimg/proyecto-1.png'
import proyectocalculadora from '../assets/proyectosimg/proyecto-2.png'
import proyectoecommerce from '../assets/proyectosimg/proyecto-3.png'
import proyectocolorflipper from '../assets/proyectosimg/proyecto-4.png'
import proyectoplantilla from '../assets/proyectosimg/proyecto-5.png'
import proyectoadimas from '../assets/proyectosimg/proyecto-6.png'
import proyectoweatherapi from '../assets/proyectosimg/proyecto-7.png'
import proyectotodolist from '../assets/proyectosimg/proyecto-8.png'
import proyectofraenyk from '../assets/proyectosimg/proyecto-9.png'

import js from '../assets/js.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import sass from '../assets/sass.png'
import bootstrap from '../assets/bootstrap.png'


const useGetProjects = () => {
    const {language} = useContext(backgroundContext);

    const proyectos = [
      {
            id: 1,
            destacado: true,
            nombre: (
            <h3 className="proyecto-title card-title">
                    {language === "ES" ? "Tienda Fraenyk" : "Fraenyk Store"}
            </h3>),
              desc: (
                <p className="proyecto-desc card-desc">
                    {language === "ES" ? "Tienda con búsqueda avanzada, detalle de productos y carrito de compras"
                   : "Store with advanced search filter, product details and functional shopping cart"}
                </p>),
              fulldesc: ( 
                <p className="p-fulldesc">
                    {language === "ES" ? `
                    Proyecto de simulación de una tienda online real.
                    Realizado con ReactJS, JS, HTML y CSS ` :
                    `Simulation project of a real online store. Carried on with ReactJS, JS, HTML and CSS` }
                    <br/>
                    <br/>

                    {language === "ES" ? `
                    Cuenta con enrutamiento a través de "HashRouter" (React Router),
                     el cual permite a la página recibir varias direcciones, rutas o "paths" y
                      mostrar la pantalla deseada según las mismas.
                      Adicionalmente, también ocurre una navegación en el historial del 
                      usuario para hacer más cómoda la experiencia al llegar a ciertas
                      pantallas de la página.` :

                     `It has routing through "HashRouter" from React Router, that allows the page 
                     to receive multiple directions, routes or "paths" and show the correct screen according to
                     them. As well, it also has a navigation through user history to make
                     more comfortable the user experience in certain screens.` }
                     <br/>
                     <br/>

                     {language === "ES" ? `
                    Aplicando el hook UseContext, la página es capaz de guardar información de forma global,
                     tanto del listado de productos como de la información que ingresa el usuario 
                     (su compra, datos para entrega, etc.), y utilizarla para mostrarla en varias secciones 
                     evitando repetir código innecesario.` : 
                    `By applying the useContext hook, the page is able to store information globally, 
                    both from the list of products and the information entered by the user 
                    (such as their purchase, delivery details, etc.), and use it to display content in various sections, 
                    avoiding unnecessary code repetition. `
                     }
                     <br/>
                     <br/>
                    {language === "ES" ? `
                    Estilos con CSS puro y en combinacion con material de las bibliotecas: 
                    React Bootstrap y MaterialUI.` :
                    `Styles with pure CSS and in combination with React Bootstrap and Material UI libraries` }
                    <br/>
                    <br/>
                    {language === "ES" ? `
                    También se realizaron validaciones en el formulario de 
                    compra para evitar que se ingresen datos erróneos o que falte información 
                    necesaria para la compra.` : 
                    `Also, validation checks were implemented in the purchase form for avoiding wrong data or the
                    omission of information needed for the purchase.`
                    }
                    <br/>
                    <br/>
                    {language === "ES" ? `
                    Por último, la página obtiene la información de cada producto a 
                    través de un archivo .JSON, el cual simula ser una base de datos, 
                    donde en cualquier momento se pueden modificar, agregar o quitar productos a elección.
                    ` : 
                    `Finally, the page obtains the information of each product through a .JSON file, which simulates
                    to be a data base, were any products can be modified, added or deleted in any moment with no problems`
                    }
                </p>
              ),
              image: proyectofraenyk,
              lenguajes: (
                  <div className='proyectos-lenguajes-container'>
                    <img src={react}></img>
                    <img src={js}></img>
                    <img src={css}></img>
                    <img src={html}></img>
                  </div>
                ),
              url: "#",
              github: "blabla"
        },
        {
          id: 2,
          destacado: true,
          nombre: (
          <h3 className="proyecto-title card-title">
                {language === "ES" ? "Lista de tareas" : "To-Do List"}
          </h3>),
          desc: (
          <p className="proyecto-desc card-desc">
              {language === "ES" ? "Lista de tareas con filtros, páginas y selección de fondo." 
            : "To-Do List with filters, pagination and background change."} 
          </p>),
          fulldesc: (
            <p className="p-fulldesc">
              {language === "ES" ? `Cuenta con filtros para visualizar tareas completas e incompletas. También con paginación y distintas opciones de fondos para el usuario.`
              : `It has filters for completed and incompleted tasks, as well as pagination and different choices of backgrounds for the user. ` }
                    <br/>
                    <br/>
              {language === "ES" ? `Este fue un proyecto que comenzó en EducacionIT y lo finalicé de forma personalizada. Realizado con ReactJS, JS, HTML y CSS.`
              : `This was a project started in EducacionIT courses and finished in a personalized way. Done with ReactJS, JS, HTML and CSS.` } 
                    <br/>
                    <br/>
              {language === "ES" ? `
              El usuario, a través de la paginación, puede navegar entre páginas, con un máximo de 5. También se le otorga la posibilidad al usuario de cambiar el fondo con hasta 10 opciones.
              Se aplicó el uso de los hooks: useEffect, useState, useContext. Así como también el renderizado condicional para mostrar ciertos componentes.` 
              : `User, through pagination, can navigate between pages, with a maximum of 5. Also, user can change the background with 10 different options.
              UseEffect, useState, useContext and conditional rendering for showing particular components were applied in this project.` }
            </p>
          ),
          image: proyectotodolist,
          lenguajes: (
            <div className='proyectos-lenguajes-container'>
              <img src={react}></img>
              <img src={js}></img>
              <img src={css}></img>
              <img src={html}></img>
            </div>
          ),
          url: "#",
          github: false
      },

         {
            id: 3,
            destacado: true,
            nombre: (
            <h3 className="proyecto-title card-title">
                    {language === "ES" ? "Juego MemoryCard" : "MemoryCard game"}
            </h3>),
            desc: (
            <p className="proyecto-desc card-desc">
                {language === "ES" ? 
                "Juego de memoria en donde debes encontrar la pareja de una carta dentro del tablero"
                 :"Memory game where you have to find the matching card" }
            </p>),
            fulldesc: (
                <p className="p-fulldesc">
                   {language === "ES" ? "Este fue un proyecto personal realizado con JavaScript, CSS y HTML" : "Personal project developed with JavaScript, CSS and HTML"} 
                    <br/>
                    <br/>
                    {language === "ES" ? 
                    `Se llevó a cabo utilizando conceptos como: objetos y sus propiedades, recorridos y métodos de arrays, 
                    programación funcional, escucha de eventos, manejo del DOM, operadores lógicos, condiciones, bucles, etc.` 
                    :
                    `Applying concepts of: objects and their properties, array methods and iteration, functional programming, events listening, 
                    manipulating DOM, logical operators, conditionals, loops, etc.`
                    }
                </p>
            ),
            image: proyectomemorycard,
            lenguajes: (
              <div className='proyectos-lenguajes-container'>
                <img src={js}></img>
                <img src={css}></img>
                <img src={html}></img>
              </div>
            ),
            url: "#",
            github: false
        },
        {
            id: 4,
            nombre: (
            <h3 className=" card-title">
                  {language === "ES" ? "Calculadora" : "Calculator"}
            </h3>),
            desc: (
            <p className="proyecto-desc card-desc">
                {language === "ES" ? "Calculadora común realizada en JavaScript" 
              : "Common calculator with JavaScript"} 
            </p>),
            fulldesc: (
              <p className="p-fulldesc">
                {language === "ES" ? "Proyecto personal realizado con JavaScript, CSS y HTML" 
                : "Personal project developed with JavaScript, CSS and HTML"}
              </p>
            ),
            image: proyectocalculadora,
            lenguajes: (
              <div className='proyectos-lenguajes-container'>
                <img src={js}></img>
                <img src={css}></img>
                <img src={html}></img>
              </div>
            ),
            url: "#",
            github: false
        },
        {
            id: 5,
            nombre: (
            <h3 className="proyecto-title card-title">
                  {language === "ES" ? "Tienda Adimas" : "Adimas Store"}
            </h3>),
            desc: (
            <p className="proyecto-desc card-desc">
                {language === "ES" ? "Tienda con filtros por tipo de producto y temporada invierno, filtro por precio, barra de busqueda a tiempo real y carrito de compras"
               : "Store with search filter for type of product, price and winter season, searchbar and shopping cart"}
            </p>),
            fulldesc: (
              <p className="p-fulldesc">
                 {language === "ES" ? `
                  Conceptos aplicados: uso de objetos, LocalStorage, manipular elementos del DOM y la creación de contenido dinámico, SinglePage, manejo del historial del usuario con la API History, programación funcional, manejo de eventos, recorrido de arrays y sus métodos.
                 `: `Applied concepts: objects, LocalStorage, DOM manipulaton and creating dinamic content, SinglePage, handling user history with API History, functional programming, event handling, arrays iteration and their methods.`}
                 <br/>
                 {language === "ES" ? "También cuenta con una pequeña implementación de recursos de Bootstrap y Bootstrap icons" 
                 : "It also counts with a little implementation of Bootstrap and Bootstrap Icons resources"}
              </p>
            ),
            image: proyectoadimas,
            lenguajes: (
              <div className='proyectos-lenguajes-container'>
                <img src={js}></img>
                <img src={css}></img>
                <img src={html}></img>
              </div>
            ),
            url: "#",
            github: false
        },
        {
          id: 6,
          nombre: (
          <h3 className="proyecto-title card-title">
                {language === "ES" ? "Pronóstico del clima App" : "Weather forecast App"}
          </h3>),
          desc: (
          <p className="proyecto-desc card-desc">
              {language === "ES" ? "Clima actual en cualquier parte del mundo a través de la API OpenWeather"
             : "Actual weather in any place of the world through OpenWeather API"}
          </p>),
          fulldesc: (
            <p className="p-fulldesc">
               {language === "ES" ? `
                Proyecto de introducción al manejo de las APIs, su comportamiento y cómo mostrar su información. Utilizando JavaScript, CSS + Bootstrap y HTML.`
                : `Introduction project to handling APIs, their behavior, and displaying their information. Developed using JavaScript, CSS + Bootstrap, and HTML.`}
               <br/>
               {language === "ES" ? 
               `Se utilizaron 4 APIs: OpenWeatherMap para el clima, GeoLocate para obtener las coordenadas del lugar, TimeZoneDB para cargar la hora y FlagsApi 
                para mostrar la bandera de cada país.` 
               : `4 APIs were used: OpenWeatherMap to fetch current weather, GeoLocate to obtain location coordenates, TimeZoneDB for local time,
                and FlagsApi for displaying the flag of each country.`}
            </p>
          ),
          image: proyectoweatherapi,
          lenguajes: (
            <div className='proyectos-lenguajes-container'>
              <img src={js}></img>
              <img src={css}></img>
              <img src={html}></img>
            </div>
          ),
          url: "#",
          github: false
      },
      {
        id: 7,
        nombre: (
        <h3 className="proyecto-title card-title">
              {language === "ES" ? "E-Commerce" : "E-Commerce"}
        </h3>),
        desc: (
        <p className="proyecto-desc card-desc">
            {language === "ES" ? "Tienda online de ropa con carrito de compras funcional y filtros por tipo de producto"
           : "Online clothes store with shopping cart and filters for type of product"}
        </p>),
        fulldesc: (
          <p className="p-fulldesc">
             {language === "ES" ? `
              Este proyecto fue una introducción a LocalStorage y me otorgó un concepto básico de lo que son las bases de datos, usando un objeto como simulador para poder almacenar los distintos tipos de productos.`
              : `This project served as introduction to LocalStorage and provided me with a basic concept of what data bases are by using an object as simulator, storing different types of products in it.`}
              <br/>
            {language === "ES" ? `También fue puesto en práctica la manipulación del DOM, escucha de eventos, trabajo con arrays y sus métodos, programación funcional, bucles y condiciones.` 
            : `Also, DOM manipulation, event listening, arrays iteration and their methods, functional programming, loops and conditionals were put in practice in this project.`}
          </p>
        ),
        image: proyectoecommerce,
        lenguajes: (
          <div className='proyectos-lenguajes-container'>
            <img src={js}></img>
            <img src={css}></img>
            <img src={html}></img>
          </div>
        ),
        url: "#",
        github: false
    },
    {
      id: 8,
      nombre: (
      <h3 className="proyecto-title card-title">
            {language === "ES" ? "Color Flipper" : "Color Flipper"}
      </h3>),
      desc: (
      <p className="proyecto-desc card-desc">
          {language === "ES" ? "MiniJuego en el que el color de fondo de la página cambia"
         : "Minigame that changes background color of the page"}
          <br/>
         {language === "ES" ? "¡Si sacás Negro o Blanco te ganas un premio!" : "If you get Black or White you win a reward!"}
      </p>),
      fulldesc: (
        <p className="p-fulldesc">
          {language === "ES" ? `Proyecto realizado en la clase 02 de JavaScript Avanzado en EducacionIT.` 
          : `Project developed in the 02 class of JavaScript Advanced in EducacionIT`}
            <br/>
            <br/>
          {language === "ES" ? `Utilizamos un poco de JavaScript para la escucha de evento "click" al botón y de mi parte agregué la lógica para alertar al usuario si gana un premio.`
          : `We used JavaScript for the button and it's event "click" listening, and I added the logic to notify the user if he/she won the price.`}
            <br/>
            <br/>
          {language === "ES" ? "(¡Es muy dificil ganar! Esa es la idea )" : "(It`s not easy to win. That's the idea!"}
        </p>
      ),
      image: proyectocolorflipper,
      lenguajes: (
        <div className='proyectos-lenguajes-container'>
          <img src={js}></img>
          <img src={css}></img>
          <img src={html}></img>
        </div>
      ),
      url: "#",
      github: false
  },
  {
    id: 9,
    nombre: (
    <h3 className="proyecto-title card-title">
          {language === "ES" ? "Plantilla Responsive" : "Responsive template"}
    </h3>),
    desc: (
    <p className="proyecto-desc card-desc">
        {language === "ES" ? "Plantilla responsive de página a elección. En mi caso, consultora hotelera para viajes"
       : "Responsive template of a page of our choice. In my case, hotel consulting page for traveling."}
    </p>),
    fulldesc: (
      <p className="p-fulldesc">
         {language === "ES" ? `
          Proyecto propuesto por iossonomauri en YouTube.`
          : `Project proposed for iossonomauri in YouTube.`}
          <br/>
        {language === "ES" ? `Mi primer proyecto Responsive (CSS)` 
        : `My first responsive project (CSS)`}
      </p>
    ),
    image: proyectoplantilla,
    lenguajes: (
      <div className='proyectos-lenguajes-container'>
        <img src={css}></img>
        <img src={html}></img>
      </div>
    ),
    url: "#",
    github: false
}
    ]

    return proyectos
}

export default useGetProjects;

