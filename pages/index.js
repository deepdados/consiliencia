import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <div className=\"flex flex-col items-center justify-center text-center space-y-6 py-10\">
        <motion.h1
          className=\"text-4xl md:text-6xl font-bold text-cyan-400\"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo à Escola de Estudos da Complexidade
        </motion.h1>
        <motion.p
          className=\"max-w-2xl text-gray-300 text-lg md:text-xl\"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore como a ciência da complexidade pode transformar negócios, \n
          aumentar a resiliência a desastres e revolucionar a saúde.
        </motion.p>
        <motion.div
          className=\"flex space-x-4\"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href=\"/cursos\">
            <a className=\"px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-lg font-medium transition-all shadow-lg\">
              Nossos Cursos
            </a>
          </Link>
          <Link href=\"/sobre\">
            <a className=\"px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-medium transition-all shadow-lg\">
              Sobre
            </a>
          </Link>
        </motion.div>
      </div>
    </Layout>
  )
}
