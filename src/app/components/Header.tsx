"use client";

import { useState } from 'react';
import animatedLogo from '../../assets/10th_anniversary.gif'; // Imagem GIF
import staticLogo from '../../assets/10th_anniversary.png'; // Importa o logo do arquivo
import iconMore from '../../assets/al-icon.png';
import iconPlus from '../../assets/plus-icon.png';
import '../globals.css';




function Header({profileImageSrc}: {profileImageSrc: string}) {
  // Estado para controlar qual imagem exibir
  const [logo, setLogo] = useState(staticLogo.src);

    // Funções para mudar a imagem no hover
    const handleMouseEnter = () => {
      setLogo(animatedLogo.src); // Muda para o GIF quando o mouse entra
    };
  
    const handleMouseLeave = () => {
      setLogo(staticLogo.src); // Volta para a imagem estática quando o mouse sai
    };

  return (
    <header className="top-bar">
      <div className="top-bar__left"> {/* Usar a classe correta */}
      <div className="menu-icon">☰</div>

      <img 
          src={logo} 
          alt="Logo" 
          className={`logo ${logo === animatedLogo.src ? 'gif-logo' : ''}`} // Aplica a classe apenas se for o GIF
          onMouseEnter={handleMouseEnter} // Adiciona o evento onMouseEnter
          onMouseLeave={handleMouseLeave} // Adiciona o evento onMouseLeave
        />
     
             {/* Título "Google Sala de Aula" */}
             <h1
          className="nome"
          onMouseEnter={handleMouseEnter}  // Adiciona o evento onMouseEnter para o nome
          onMouseLeave={handleMouseLeave}  // Adiciona o evento onMouseLeave para o nome
          >
                      Google Sala de Aula
             </h1>

      </div>
      
      <div className="top-bar__right" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={iconPlus.src} alt="Classroom addition" className="icon iconPlus" />
      <img src={iconMore.src} alt="Icon with all the other Google Apps" className="icon iconMore" />
      <img src={profileImageSrc} alt="User Avatar" className="avatar" />

      </div>
    </header>
  );
}

export default Header;
