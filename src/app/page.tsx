import Image from "next/image";
import Banner from "@/components/banner";
import BannerInvert from "@/components/banner-invert/BannerInvert";
import BannerCenter from "@/components/bannerCenter";
export default function Home() {
  return (
    <main>
      <Banner
        src="/tenda-evento.jpg"
        title="Bem-vindo à Prado Locações"
        content={<p>Na Prado Locações, somos <em className="destaque">especialistas</em> em fornecer tudo o que você precisa para garantir o sucesso do seu evento. Com <em className="destaque">anos de experiência</em> no mercado, oferecemos uma ampla variedade de estruturas e equipamentos de <em className="destaque">alta qualidade</em> para atender às suas necessidades.</p>}
        class="banner-black"
      ></Banner>
      <BannerInvert
        src="/banheiros2.jpg"
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
      <BannerCenter title="Pode contar conosco!" src="/evento-equipe.jpg"></BannerCenter>
    </main>
  );
}
