/**
 * Map(오시는 길) 컴포넌트 - 카카오맵 연동
 */
class MapComponent extends HTMLElement {
  constructor() { super(); }
  connectedCallback() {
    this.innerHTML = `
      <section id="map" class="relative py-20 bg-gradient-to-br from-white via-background to-primary/10 overflow-hidden section-animate">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-yellow-300 flex items-center justify-center gap-3">
              <span><i class="fas fa-map-marker-alt text-accent text-4xl"></i></span>
              오시는 길
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">아이뜨락 어린이집 위치 및 교통 안내</p>
          </div>
          <div id="kakao-map" class="w-full h-96 rounded-2xl shadow-lg border border-primary/20 dark:border-yellow-300/20" aria-label="어린이집 위치 지도" tabindex="0"></div>
          <div class="mt-6 text-center text-gray-700 dark:text-gray-300 text-sm">
            <strong>주소:</strong> 경기도 수원시 팔달구 매산로 123 (예시 주소)<br>
            <strong>전화:</strong> <a href="tel:031-123-4567" class="text-primary hover:underline">031-123-4567</a>
          </div>
        </div>
      </section>
    `;
    // 카카오맵 API 스크립트 동적 삽입 및 지도 표시
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_API_KEY&autoload=false";
      script.onload = () => {
        window.kakao.maps.load(() => this.renderMap());
      };
      document.head.appendChild(script);
    } else {
      window.kakao.maps.load(() => this.renderMap());
    }
  }
  renderMap() {
    const container = this.querySelector('#kakao-map');
    const options = {
      center: new window.kakao.maps.LatLng(37.2665, 127.0005), // 수원역 근처 예시
      level: 3
    };
    const map = new window.kakao.maps.Map(container, options);
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(37.2665, 127.0005),
      map: map
    });
  }
}
customElements.define('map-component', MapComponent);
