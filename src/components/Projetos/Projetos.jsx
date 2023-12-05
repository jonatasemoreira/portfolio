import './Projetos.css';
import imagemAa from '../../img/projects/filmesReact.png';

export default function MeusProjetos() {
  const dataProjects = [
    {
      nome: 'Projeto 1',
      descricao: 'Filmes - React.js',
      imagem: imagemAa,
      link: 'https://jonatasemoreira.github.io/movies/'
    }
  ];

  const enviarParaFront = () => {
    return dataProjects.map((projeto, index) => (
      <div className='container-dos-projetos' key={index}>
        <a href={projeto.link}>
          <img src={projeto.imagem} alt={projeto.nome} />
        </a>
        <p className='descricao-projeto'>{projeto.descricao}</p>
      </div>
    ));
  };

  return (
    <div className='container-principal-projetos'>
        {enviarParaFront()}
    </div>
  );
}