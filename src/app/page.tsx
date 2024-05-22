import Image from "next/image";
import Banner from "@/components/banner";
export default function Home() {
  return (
    <main>
    <Banner src="/tenda-evento.jpg" title="Bem-vindo à Prado Locações" content="Na Prado Locações, somos especialistas em fornecer tudo o que você precisa para garantir o sucesso do seu evento. Com anos de experiência no mercado, oferecemos uma ampla variedade de estruturas e equipamentos de alta qualidade para atender às suas necessidades." class="banner-black"></Banner>
    </main>
  );
}
