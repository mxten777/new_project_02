# 🛠 아이뜨락 어린이집 - 기술 구현 가이드

> **솔로 개발자를 위한 단계별 구현 매뉴얼**

## 🚀 **즉시 구현 가능한 백엔드 (Week 2)**

### **1. Firebase 프로젝트 설정 (5분)**

```bash
# 1. Firebase 프로젝트 생성
1. https://console.firebase.google.com 접속
2. "프로젝트 추가" 클릭
3. 프로젝트명: "aitrak-daycare"
4. Google Analytics 활성화
5. 지역: "asia-northeast3 (서울)" 선택

# 2. Firestore 데이터베이스 설정
1. 왼쪽 메뉴 > "Firestore Database"
2. "데이터베이스 만들기" 클릭
3. 보안 규칙: "테스트 모드에서 시작"
4. 위치: "asia-northeast3 (서울)"

# 3. 웹앱 등록
1. 프로젝트 설정 > "일반" 탭
2. "앱 추가" > 웹 아이콘 클릭
3. 앱 이름: "아이뜨락 어린이집 웹앱"
4. Firebase SDK 구성 코드 복사
```

### **2. Firebase 설정 파일 생성**

```javascript
// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "aitrak-daycare.firebaseapp.com",
  projectId: "aitrak-daycare",
  storageBucket: "aitrak-daycare.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 서비스 초기화
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
```

### **3. Firestore 데이터 구조 설계**

```javascript
// Firestore 컬렉션 구조 (NoSQL)

// consultations 컬렉션
{
  id: "auto-generated-id",
  parentName: "김학부모",
  childAge: "만 3세",
  phone: "010-1234-5678",
  preferredTime: "오전 10시",
  message: "상담 희망합니다",
  status: "pending", // pending, contacted, completed
  createdAt: "2025-07-01T10:00:00Z",
  updatedAt: "2025-07-01T10:00:00Z"
}

// inquiries 컬렉션
{
  id: "auto-generated-id",
  name: "문의자명",
  email: "test@example.com",
  phone: "010-1234-5678",
  subject: "문의 제목",
  message: "문의 내용",
  status: "new", // new, processing, resolved
  createdAt: "2025-07-01T10:00:00Z"
}

// visitors 컬렉션 (방문자 통계)
{
  id: "auto-generated-id",
  ipAddress: "192.168.1.1",
  userAgent: "Mozilla/5.0...",
  pagePath: "/",
  referrer: "https://google.com",
  visitedAt: "2025-07-01T10:00:00Z"
}
```

### **4. 상담 신청 기능 구현**

#### **Firebase 상담 신청 저장**

```javascript
// consultations.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase-config.js';

// 상담 신청 저장 함수
export async function submitConsultation(formData) {
  try {
    const docRef = await addDoc(collection(db, 'consultations'), {
      parentName: formData.parentName,
      childAge: formData.childAge,
      phone: formData.phone,
      preferredTime: formData.preferredTime,
      message: formData.message,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    console.log('상담 신청 완료! Document ID:', docRef.id);
    return { success: true, id: docRef.id };

  } catch (error) {
    console.error('상담 신청 오류:', error);
    return { success: false, error: error.message };
  }
}
          preferred_time: preferredTime,
          message: message,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    // 2. 관리자에게 이메일 발송
    await resend.emails.send({
      from: "noreply@aitrak-daycare.com",
      to: ["director@aitrak-daycare.com"], // 실제 이메일 주소
      subject: `🏫 새로운 상담 신청 - ${parentName}님`,
      html: `
        <h2>새로운 상담 신청이 접수되었습니다</h2>
        <p><strong>학부모명:</strong> ${parentName}</p>
        <p><strong>아이 연령:</strong> ${childAge}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>희망 시간:</strong> ${preferredTime}</p>
        <p><strong>문의 내용:</strong></p>
        <p>${message || "별도 문의사항 없음"}</p>
        <hr>
        <p>상담 신청 ID: ${data.id}</p>
        <p>접수 시간: ${new Date().toLocaleString("ko-KR")}</p>
      `,
    });

    // 3. 학부모에게 확인 이메일 발송 (선택사항)

    return res.status(200).json({
      success: true,
      message: "상담 신청이 완료되었습니다.",
      consultationId: data.id,
    });
  } catch (error) {
    console.error("상담 신청 처리 오류:", error);
    return res.status(500).json({
      error: "상담 신청 처리 중 오류가 발생했습니다.",
    });
  }
}
```

#### **api/get-consultations.ts**

```typescript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 간단한 인증 (향후 JWT로 강화)
    const authToken = req.headers.authorization;
    if (authToken !== `Bearer ${process.env.ADMIN_SECRET_KEY}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { data, error } = await supabase
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return res.status(200).json({ consultations: data });
  } catch (error) {
    console.error("상담 신청 조회 오류:", error);
    return res.status(500).json({
      error: "데이터 조회 중 오류가 발생했습니다.",
    });
  }
}
```

### **4. 프론트엔드 연동**

#### **script.js 수정**

```javascript
// 기존 상담 신청 폼 처리 부분 수정
async function handleConsultationSubmit(formData) {
  try {
    const response = await fetch("/api/submit-consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentName: formData.get("parent-name"),
        childAge: formData.get("child-age"),
        phone: formData.get("phone"),
        preferredTime: formData.get("preferred-time"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      showSuccessMessage(
        "상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다."
      );
      // 폼 리셋
      consultationForm.reset();

      // Google Analytics 이벤트 (선택사항)
      if (typeof gtag !== "undefined") {
        gtag("event", "consultation_submit", {
          event_category: "engagement",
          event_label: "consultation_form",
        });
      }
    } else {
      throw new Error(result.error || "알 수 없는 오류가 발생했습니다.");
    }
  } catch (error) {
    console.error("상담 신청 오류:", error);
    showErrorMessage(
      "상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
    );
  }
}
```

### **5. 관리자 대시보드 (간단 버전)**

#### **admin.html**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>아이뜨락 어린이집 - 관리자</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      .admin-container {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1rem;
      }
      .consultation-card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .status-pending {
        border-left: 4px solid #ff6b6b;
      }
      .status-contacted {
        border-left: 4px solid #4ecdc4;
      }
      .status-completed {
        border-left: 4px solid #45b7d1;
      }
    </style>
  </head>
  <body>
    <div class="admin-container">
      <h1>📊 아이뜨락 어린이집 관리자</h1>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>이번 달 상담 신청</h3>
          <p class="stat-number" id="monthlyCount">-</p>
        </div>
        <div class="stat-card">
          <h3>대기 중인 상담</h3>
          <p class="stat-number" id="pendingCount">-</p>
        </div>
      </div>

      <div class="consultations-container">
        <h2>상담 신청 목록</h2>
        <div id="consultationsList">
          <!-- 동적으로 생성 -->
        </div>
      </div>
    </div>

    <script>
      // 관리자 대시보드 로직
      async function loadConsultations() {
        try {
          const response = await fetch("/api/get-consultations", {
            headers: {
              Authorization: `Bearer ${prompt(
                "관리자 비밀번호를 입력하세요:"
              )}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            displayConsultations(data.consultations);
          } else {
            alert("인증 실패");
          }
        } catch (error) {
          console.error("데이터 로드 오류:", error);
        }
      }

      function displayConsultations(consultations) {
        const container = document.getElementById("consultationsList");
        container.innerHTML = consultations
          .map(
            (consultation) => `
                <div class="consultation-card status-${consultation.status}">
                    <h3>${consultation.parent_name}님 (${
              consultation.child_age
            })</h3>
                    <p><strong>연락처:</strong> ${consultation.phone}</p>
                    <p><strong>희망 시간:</strong> ${
                      consultation.preferred_time
                    }</p>
                    <p><strong>문의:</strong> ${
                      consultation.message || "별도 문의 없음"
                    }</p>
                    <p><strong>신청일:</strong> ${new Date(
                      consultation.created_at
                    ).toLocaleString("ko-KR")}</p>
                    <p><strong>상태:</strong> ${consultation.status}</p>
                </div>
            `
          )
          .join("");
      }

      // 페이지 로드시 데이터 가져오기
      document.addEventListener("DOMContentLoaded", loadConsultations);
    </script>
  </body>
</html>
```

## 📦 **필요한 패키지 설치**

### **package.json 업데이트**

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0",
    "resend": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

### **설치 명령어**

```bash
npm install @supabase/supabase-js resend
npm install -D @types/node typescript
```

## 🔐 **환경변수 설정**

### **Vercel 환경변수**

```bash
# Vercel 대시보드에서 설정
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJ...
RESEND_API_KEY=re_xxx
ADMIN_SECRET_KEY=your-admin-secret
```

## 📈 **분석 도구 연동**

### **Google Analytics 4**

```html
<!-- index.html head에 추가 -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## ✅ **구현 체크리스트**

### **Week 2 목표**

- [ ] Supabase 프로젝트 생성 완료
- [ ] 데이터베이스 테이블 생성 완료
- [ ] 상담 신청 API 개발 완료
- [ ] 이메일 발송 기능 완료
- [ ] 관리자 대시보드 기본 완료
- [ ] 전체 기능 테스트 완료

**🎯 예상 소요시간: 15-20시간 (1주일 파트타임)**

---

_💡 구현 중 막히는 부분이 있으면 언제든 질문하세요!_
