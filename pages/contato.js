import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado pelo seu contato! (Aqui você poderia integrar com um backend)')
    // Aqui você poderia integrar com um serviço de e-mail ou banco de dados
  }

  return (
    <Layout>
      <div className=\"max-w-xl mx-auto text-gray-200\">
        <h1 className=\"text-3xl md:text-4xl font-bold mb-4 text-cyan-400\">Contato</h1>
        <p className=\"mb-6\">Envie suas dúvidas, sugestões ou colaborações.</p>
        <form onSubmit={handleSubmit} className=\"space-y-4\">
          <div>
            <label className=\"block mb-1\" htmlFor=\"nome\">Nome</label>
            <input
              id=\"nome\"
              type=\"text\"
              className=\"w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-500\"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label className=\"block mb-1\" htmlFor=\"email\">Email</label>
            <input
              id=\"email\"
              type=\"email\"
              className=\"w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-500\"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className=\"block mb-1\" htmlFor=\"mensagem\">Mensagem</label>
            <textarea
              id=\"mensagem\"
              rows=\"4\"
              className=\"w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-cyan-500\"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button
            type=\"submit\"
            className=\"px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium transition-all shadow-lg\"
          >
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  )
}
