import Layout from '../components/Layout'

export default function Cursos() {
  return (
    <Layout>
      <div className=\"text-gray-200\">
        <h1 className=\"text-3xl md:text-4xl font-bold mb-4 text-cyan-400\">Cursos</h1>

        {/* Curso 1 */}
        <div className=\"mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-md\">
          <h2 className=\"text-2xl font-semibold text-cyan-300\">1. Complexidade para Crescimento Empresarial (20h)</h2>
          <p className=\"text-gray-300 mt-2\">
            Estratégia Complexa: Como Navegar na Incerteza e Acelerar o Crescimento dos Negócios
          </p>
          <ul className=\"list-disc list-inside mt-3 space-y-2 text-gray-400\">
            <li><strong>Aula 1 (4h):</strong> Empresas como Sistemas Adaptativos Complexos</li>
            <li><strong>Aula 2 (4h):</strong> Estratégias de Crescimento Não Lineares</li>
            <li><strong>Aula 3 (4h):</strong> Tomada de Decisão em Ambientes Incertos</li>
            <li><strong>Aula 4 (4h):</strong> Redes e Crescimento Viral nos Negócios</li>
            <li><strong>Aula 5 (4h):</strong> Inovação e Evolução no Mercado</li>
          </ul>
        </div>

        {/* Curso 2 */}
        <div className=\"mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-md\">
          <h2 className=\"text-2xl font-semibold text-cyan-300\">2. Complexidade para Resiliência a Desastres (20h)</h2>
          <p className=\"text-gray-300 mt-2\">
            Sistemas Resilientes: Aplicando a Ciência da Complexidade na Gestão de Desastres
          </p>
          <ul className=\"list-disc list-inside mt-3 space-y-2 text-gray-400\">
            <li><strong>Aula 1 (4h):</strong> Desastres como Sistemas Complexos</li>
            <li><strong>Aula 2 (4h):</strong> Sistemas de Alerta e Redes de Influência</li>
            <li><strong>Aula 3 (4h):</strong> Estratégias Adaptativas de Resposta</li>
            <li><strong>Aula 4 (4h):</strong> Falhas Sistêmicas e Pontos de Ruptura</li>
            <li><strong>Aula 5 (4h):</strong> Modelagem e Simulação de Desastres</li>
          </ul>
        </div>

        {/* Curso 3 */}
        <div className=\"mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-md\">
          <h2 className=\"text-2xl font-semibold text-cyan-300\">3. Complexidade para Saúde e Sistemas Médicos (20h)</h2>
          <p className=\"text-gray-300 mt-2\">
            Complexidade na Saúde: Dos Desafios Sistêmicos às Soluções Inteligentes
          </p>
          <ul className=\"list-disc list-inside mt-3 space-y-2 text-gray-400\">
            <li><strong>Aula 1 (4h):</strong> Sistemas de Saúde como Sistemas Complexos</li>
            <li><strong>Aula 2 (4h):</strong> Modelagem da Propagação de Doenças</li>
            <li><strong>Aula 3 (4h):</strong> Gestão de Recursos em Hospitais</li>
            <li><strong>Aula 4 (4h):</strong> Inteligência Artificial e Medicina Adaptativa</li>
            <li><strong>Aula 5 (4h):</strong> Políticas de Saúde e Resiliência Sistêmica</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
