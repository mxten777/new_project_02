/**
 * 테스티모니얼 슬라이더 컴포넌트
 * 고객 후기를 표시하는 슬라이더
 */
class TestimonialSliderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="testimonials" class="relative py-24 bg-gradient-to-br from-white via-[#f8f9fa] to-background overflow-hidden dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <!-- 상단 곡선 SVG Divider -->
        <div class="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="url(#testimonials-top)"/>
            <defs>
              <linearGradient id="testimonials-top" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--color-background)"/>
                <stop offset="1" stop-color="var(--color-background-alt)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-primary dark:text-yellow-300 drop-shadow-lg tracking-tight">부모님 후기</h2>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">학부모님들이 들려주신 진솔한 이야기</p>
          </div>
          
          <div class="testimonial-slider relative">
            <div class="testimonial-track flex transition-transform duration-500 ease-in-out">
              <!-- 후기 1 -->
              <div class="testimonial-slide w-full shrink-0 px-2">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center md:text-left">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 dark:border-accent/10 flex-shrink-0">
                      <img src="/image/pinterest_29.jpg" alt="학부모 사진" class="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div class="text-amber-400 text-2xl mb-3">★★★★★</div>
                      <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"아이가 어린이집에 다닌 후 사회성이 크게 향상되었어요. 선생님들의 세심한 관심과 전문적인 교육 방식에 너무 만족합니다. 특히 창의적인 활동들이 아이의 상상력을 키워주는 것 같아요."</p>
                      <div class="font-bold text-lg text-primary dark:text-yellow-300">김지은 학부모</div>
                      <div class="text-gray-500 dark:text-gray-400 text-sm">만 4세 민준이 엄마</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 후기 2 -->
              <div class="testimonial-slide w-full shrink-0 px-2">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center md:text-left">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 dark:border-accent/10 flex-shrink-0">
                      <img src="/image/20240909_05.jpg" alt="학부모 사진" class="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div class="text-amber-400 text-2xl mb-3">★★★★★</div>
                      <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"우리 아이가 매일 어린이집에 가는 것을 기대해요. 선생님들의 따뜻한 보살핌과 다양한 활동들이 아이의 성장에 큰 도움이 되고 있습니다. 특히 자연 친화적인 교육 방식이 마음에 들어요."</p>
                      <div class="font-bold text-lg text-primary dark:text-yellow-300">박현우 학부모</div>
                      <div class="text-gray-500 dark:text-gray-400 text-sm">만 3세 서연이 아빠</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 후기 3 -->
              <div class="testimonial-slide w-full shrink-0 px-2">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center md:text-left">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 dark:border-accent/10 flex-shrink-0">
                      <img src="/image/sample_img_03.jpg" alt="학부모 사진" class="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div class="text-amber-400 text-2xl mb-3">★★★★★</div>
                      <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"처음에는 걱정이 많았는데, 아이뜨락 어린이집의 투명한 운영 방식과 열린 소통에 안심이 되었어요. 급식 메뉴도 영양사가 꼼꼼히 관리하고, 위생 상태도 항상 청결해서 믿고 맡길 수 있어요."</p>
                      <div class="font-bold text-lg text-primary dark:text-yellow-300">이수진 학부모</div>
                      <div class="text-gray-500 dark:text-gray-400 text-sm">만 5세 지호 엄마</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 네비게이션 버튼 -->
            <button class="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-3 text-2xl text-primary dark:text-yellow-300 z-10 hover:bg-primary/10 dark:hover:bg-gray-700/80 transition" aria-label="이전 후기"><i class="fas fa-chevron-left"></i></button>
            <button class="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-3 text-2xl text-primary dark:text-yellow-300 z-10 hover:bg-primary/10 dark:hover:bg-gray-700/80 transition" aria-label="다음 후기"><i class="fas fa-chevron-right"></i></button>
            <div class="testimonial-dots flex justify-center gap-2 mt-8"></div>
          </div>
        </div>
        
        <!-- 하단 곡선 SVG Divider -->
        <div class="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-20">
            <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="url(#testimonials-bottom)"/>
            <defs>
              <linearGradient id="testimonials-bottom" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--color-background)"/>
                <stop offset="1" stop-color="var(--color-background-alt)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    `;
  }
}

customElements.define('testimonial-slider-component', TestimonialSliderComponent);