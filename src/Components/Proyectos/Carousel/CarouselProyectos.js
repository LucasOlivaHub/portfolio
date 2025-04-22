import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useGetProjects from '../../../data/projects'

function CarouselProyectos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const proyectosArr = useGetProjects();

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {proyectosArr && proyectosArr.map((p) => {
            return p.destacado === true && (
              <Carousel.Item key={p.id}>
              <a href={p.url} className="card" target="_blank" rel="noreferrer">
                 <img src={p.image} alt="proyecto" className="card-image"/>
                  {p.nombre}
               </a>
             </Carousel.Item>
            );
        })}
    </Carousel>
  );
}

export default CarouselProyectos;