import Layout from '../components/Layout'

export default function Sobre() {
  return (
    <Layout>
      <div className=\"max-w-3xl mx-auto text-gray-200 space-y-6\">
        <h1 className=\"text-3xl md:text-4xl font-bold text-cyan-400\">Sobre a Escola</h1>
        <p>
          A <strong>Escola de Estudos da Complexidade</strong> nasceu com a missão de difundir o conhecimento
          sobre sistemas complexos e suas aplicações em diversas áreas. Acreditamos que o entendimento
          aprofundado de dinâmicas não lineares, redes e modelagem pode gerar soluções inovadoras e
          sustentáveis para os desafios contemporâneos.
        </p>
        <p>
          Nossa abordagem é <em>interdisciplinar</em>, unindo conceitos de física, biologia, ciência da computação,
          economia e várias outras áreas para criar cursos práticos e acessíveis.
        </p>
        <p>
          Desenvolvemos cursos de curta duração (20h) focados em aplicações reais — de como
          escalar negócios em mercados incertos até a prevenção de desastres e a melhoria de sistemas de saúde.
        </p>
        <p>
          <strong>Junte-se a nós</strong> e descubra como a ciência da complexidade pode transformar sua forma
          de pensar, agir e inovar.
        </p>
      </div>
    </Layout>
  )
}
