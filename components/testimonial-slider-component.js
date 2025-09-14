/**
 * 테스티모니얼 슬라이더 컴포넌트
 * 고객 후기를 표시하는 슬라이더
 */
class TestimonialSliderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 후기 데이터 (예시)
    const testimonials = [
      {
        text: `아이가 어린이집에 다닌 후 사회성이 크게 향상되었어요. 선생님들의 세심한 관심과 전문적인 교육 방식에 너무 만족합니다. 특히 창의적인 활동들이 아이의 상상력을 키워주는 것 같아요.`,
        name: '김지은 학부모',
        info: '만 4세 민준이 엄마',
        img: '/public/images/sample_img_03.jpg',
      },
      {
        text: `우리 아이가 매일 어린이집에 가는 것을 기대해요. 선생님들의 따뜻한 보살핌과 다양한 활동들이 아이의 성장에 큰 도움이 되고 있습니다. 특히 자연 친화적인 교육 방식이 마음에 들어요.`,
        name: '박현우 학부모',
        info: '만 3세 서연이 아빠',
        img: '/public/images/pinterest_29.jpg',
      },
      {
        text: `처음에는 걱정이 많았는데, 아이뜨락 어린이집의 투명한 운영 방식과 열린 소통에 안심이 되었어요. 급식 메뉴도 영양사가 꼼꼼히 관리하고, 위생 상태도 항상 청결해서 믿고 맡길 수 있어요.`,
        name: '이수진 학부모',
        info: '만 5세 지호 엄마',
        img: '/public/images/20240909_05.jpg',
      },
    ];

    // 후기 HTML 생성
    let html = `
      <section id="testimonials" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-3xl mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-primary dark:text-yellow-300 mb-8">부모님 후기</h2>
          <div class="space-y-8">
            ${testimonials.map(t => `
              <div class="flex flex-col md:flex-row items-start gap-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
                <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/20 dark:border-accent/10 flex-shrink-0">
                  <img src="${t.img}" alt="학부모 사진" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <div class="flex-grow min-w-0 w-full">
                  <p class="text-gray-900 dark:text-gray-100 mb-3 whitespace-pre-line break-words w-full">${t.text}</p>
                  <div class="font-bold text-lg text-primary dark:text-yellow-300">${t.name}</div>
                  <div class="text-gray-700 dark:text-gray-300 text-sm">${t.info}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    this.innerHTML = html;
  }
}

// 웹 컴포넌트 등록
customElements.define('testimonial-slider-component', TestimonialSliderComponent);