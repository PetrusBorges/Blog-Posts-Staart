import Feed from "../components/Feed";

export default function MostViewed() {
  const posts = [
    {
      id: Math.random(),
      content:
        "Estou aprendendo e praticando ReactJS, todos os dias. Confira meus projetos e estudos em github.com/PetrusBorges",
      userName: "Petrus Borges",
      publishedAt: new Date(),
    },
  ];

  return (
    <main className="most-viewed">
      <Feed
        posts={posts}
        title="Mais vistos!"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade."
      />
    </main>
  );
}
