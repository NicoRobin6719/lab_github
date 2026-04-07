import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-4xl px-6 py-24 bg-white dark:bg-black">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-4">
          <Image
            src="/github-mark.svg"
            alt="GitHub logo"
            width={48}
            height={48}
            className="dark:invert"
          />
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            O que é o GitHub?
          </h1>
        </div>

        {/* Conteúdo */}
        <section className="flex flex-col gap-6 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            O <span className="font-semibold text-zinc-900 dark:text-zinc-100">GitHub</span> é
            uma plataforma usada por desenvolvedores para armazenar, versionar e
            compartilhar código. Ele funciona junto com o <strong>Git</strong>,
            um sistema de controle de versão.
          </p>

          <p className="text-lg leading-relaxed">
            Com o GitHub, você pode acompanhar alterações no código, trabalhar em
            equipe no mesmo projeto e manter um histórico completo de tudo o que
            foi feito.
          </p>

          <p className="text-lg leading-relaxed">
            Além disso, o GitHub é muito usado como <strong>portfólio</strong>,
            permitindo que recrutadores vejam seus projetos, sua organização de
            código e sua evolução como desenvolvedora.
          </p>
        </section>

        {/* Cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              Versionamento
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Salva o histórico do código e permite voltar para versões antigas.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              Trabalho em equipe
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Várias pessoas podem contribuir no mesmo projeto de forma organizada.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              Portfólio
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Mostra seus projetos e habilidades para o mercado de trabalho.
            </p>
          </div>
        </section>

        {/* Botões */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full bg-black px-6 font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Acessar GitHub
          </a>

          <a
            href="https://docs.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Documentação
          </a>
        </div>
      </main>
    </div>
  );
}