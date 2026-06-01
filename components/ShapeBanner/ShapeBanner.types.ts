export interface ShapeBannerProps {
  /** URL da imagem exibida dentro do shape */
  imageSrc: string;
  /** Texto alternativo acessível para a imagem */
  imageAlt: string;
  /**
   * Cor de fundo do shape.
   * @default "aqua"
   */
  backgroundColor?: string;
  /**
   * Largura do wrapper — aceita qualquer valor CSS válido.
   * @default "80vw"
   */
  width?: string;
  /**
   * Largura máxima do wrapper — aceita qualquer valor CSS válido.
   * @default "800px"
   */
  maxWidth?: string;
  /** Classe CSS extra para o elemento wrapper externo */
  className?: string;
}
