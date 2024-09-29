import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="App">
      <Header />  {/* Barra superior */}
      <Sidebar /> {/* Barra lateral */}
      
      <main className="main-content">
        {/* Conteúdo principal */}
        <h2>Conteúdo Principal</h2>
        <p>Aqui vai o conteúdo principal abaixo da barra lateral e barra superior.</p>
      </main>
    </div>
  );
}
