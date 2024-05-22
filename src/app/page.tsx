import Image from "next/image";
import Banner from "@/components/banner";
import BannerInvert from "@/components/banner-invert/BannerInvert";
export default function Home() {
  return (
    <main>
      <Banner
        src="/tenda-evento.jpg"
        title="Bem-vindo à Prado Locações"
        content="Na Prado Locações, somos especialistas em fornecer tudo o que você precisa para garantir o sucesso do seu evento. Com anos de experiência no mercado, oferecemos uma ampla variedade de estruturas e equipamentos de alta qualidade para atender às suas necessidades."
        class="banner-black"
      ></Banner>
      <BannerInvert
        src="/tendas-jogo.jpg"
        title="Nossos Serviços:"
        content={
          <ul>
            <li>
              <b>Lixeiras:</b> Soluções práticas e eficientes para a gestão de
              resíduos durante o seu evento.Tendas: Proteção e estilo para
              qualquer tipo de evento, garantindo conforto e segurança.
            </li>
            <li>
              <b>Unifilas:</b> Organização e controle de filas para manter o
              fluxo de pessoas de maneira eficiente e ordenada.
            </li>
            <li>
              <b>Mesas e Cadeiras:</b> Mobiliário confortável e elegante para
              acomodar seus convidados com estilo.
            </li>
            <li>
              E muito mais! Além desses, disponibilizamos uma vasta gama de
              outros itens essenciais para que seu evento seja impecável.
            </li>
          </ul>
        }
        class="banner-black"
      ></BannerInvert>
    </main>
  );
}
