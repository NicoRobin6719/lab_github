export default function Configuracao() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold">
          Configuração do GitHub no Visual Studio Code
        </h1>

        {/* Etapa 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            1. Instalar o Git via terminal do Visual Studio Code
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400">
            Primeiro, é necessário instalar o Git no computador. Para isso,
            abra o terminal do Visual Studio Code e execute o comando abaixo:
          </p>

          <pre className="rounded-lg bg-zinc-900 p-4 text-sm text-green-400">
            winget install --id Git.Git -e --source winget
          </pre>
        </section>

        {/* Etapa 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            2. Configurar o usuário do GitHub
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400">
            Após a instalação, é necessário configurar o e-mail e o nome de
            usuário do GitHub. Esses dados identificam quem está fazendo as
            alterações nos projetos.
          </p>

          <pre className="rounded-lg bg-zinc-900 p-4 text-sm text-green-400">
            git config --global user.email emaildogit{"\n"}
            git config --global user.name usuariodogit
          </pre>
        </section>

        {/* Etapa 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            3. Autorizar o acesso ao GitHub
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400">
            Ao realizar o primeiro comando que interage com o GitHub, o Visual
            Studio Code solicitará a autorização de acesso. Basta confirmar e
            fazer login na sua conta do GitHub quando for solicitado.
          </p>
        </section>
      </main>
    </div>
  );
}