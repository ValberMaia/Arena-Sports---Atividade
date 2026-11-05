import Button from '../common/Button';
import './LocationSection.css';

const LocationSection = () => (
  <section className="location-section" id="contato">
    <div className="location-section-inner">
      <div className="location-copy">
        <h2>Seu ponto de encontro em Tabuleiro do Norte.</h2>
        <ul>
          <li><img src="/images/icons/map-pin.svg" alt="" /><span><strong>Tabuleiro do Norte, CE</strong><br />Rua do Arco, 120 • endereço fictício</span></li>
          <li><span className="location-symbol">◉</span><span><strong>(88) 90000-2026</strong><br />oi@tabusports.example</span></li>
          <li><span className="location-symbol">◷</span><span>Seg–sex: 06h às 23h • Sáb–dom: 07h às 22h</span></li>
        </ul>
        <Button variant="outline" arrow href="mailto:oi@tabusports.example">Vamos conversar</Button>
      </div>
      <div className="location-map" role="img" aria-label="Mapa ilustrativo indicando a localização da TabuSports em Tabuleiro do Norte">
        <div className="map-block map-block-one" />
        <div className="map-block map-block-two" />
        <div className="map-block map-block-three" />
        <div className="map-label">TABUSPORTS</div>
        <img src="/images/icons/map-pin.svg" alt="" className="map-pin" />
        <span className="map-caption">Tabuleiro do Norte • CE</span>
      </div>
    </div>
  </section>
);

export default LocationSection;
