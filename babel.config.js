module.exports = {
    presets: [
      '@babel/preset-env', // Transforma o código para compatibilidade com versões mais antigas de JS
      '@babel/preset-react', // Lida com JSX
      '@babel/preset-typescript' // Adiciona suporte a TypeScript
    ],
    // Garante que o Babel não tente processar flow
    plugins: [],
  };
  