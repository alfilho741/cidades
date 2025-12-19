import Image from "next/image";

export default function Home() {
  return (
    <div id="background" className="flex items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12">
        {/* Lado esquerdo - Imagem/Hero */}
        <div className="flex flex-col justify-center items-center lg:items-start text-white">
          <div className="relative w-full max-w-lg">
            <Image
              src="https://i.imgur.com/0Y9lZ9q.png"
              alt="Mulher anunciando com megafone e ícones de redes sociais"
              width={800}
              height={800}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mt-8 text-center lg:text-left">
            Descubra tudo na sua cidade
          </h1>
          <p className="text-xl mt-4 text-center lg:text-left opacity-90">
            Restaurantes, hotéis, bares, serviços e eventos gratuitos
          </p>
        </div>

        {/* Lado direito - Formulário de seleção */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Escolha seu lugar
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Selecione o estado</option>
                {/* Você pode adicionar os estados reais depois */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Selecione a cidade</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition mt-6">
              Explorar agora
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              Ainda não é membro?
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg text-lg transition">
              ENTRAR JÁ
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Login com Google em breve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
