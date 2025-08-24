const LeituraDePost = ({ registro }) => {
  if (!registro) {
    return <div>Nenhum registro fornecido.</div>;
  }

  return (
    <div>
      <h2>{registro.titulo}</h2>
      <p>{registro.conteudo}</p>
    </div>
  );
};

export default LeituraDePost;