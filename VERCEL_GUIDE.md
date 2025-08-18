# 🚀 Vercel 빠른 배포 가이드

## 1분 배포 🚀

```bash
# 1. Vercel CLI 설치 (전역 설치)
npm install -g vercel

# 2. 프로젝트 폴더에서 배포
cd new_project_02
vercel

# 3. 프로덕션 배포
vercel --prod
```

## 자동 배포 설정 🔄

### GitHub 연동

1. Vercel 대시보드 → Import Project
2. GitHub 저장소 선택
3. `main` 브랜치 푸시시 자동 배포

### 배포 URL 예시

- **Preview**: `https://happy-daycare-mvp-git-main-yourteam.vercel.app`
- **Production**: `https://happy-daycare-mvp.vercel.app`

## 팀 설정 👥

```bash
# 팀 계정으로 배포
vercel --scope your-team-name

# 팀 프로젝트 목록 확인
vercel list --scope your-team-name
```

## 환경 변수 설정 ⚙️

```bash
# 로컬 개발용
vercel env add CONTACT_EMAIL development
vercel env add PHONE_NUMBER development

# 프로덕션용
vercel env add CONTACT_EMAIL production
vercel env add PHONE_NUMBER production
```

## 도메인 연결 🌐

```bash
# 커스텀 도메인 추가
vercel domains add yourdomain.com

# 도메인 연결
vercel alias https://your-deployment.vercel.app yourdomain.com
```

## 성능 모니터링 📊

- **Analytics**: Vercel 대시보드에서 활성화
- **Core Web Vitals**: 자동 수집
- **Real User Monitoring**: 실시간 성능 추적

## 유용한 명령어 💡

```bash
# 개발 서버 (Vercel 환경)
vercel dev

# 로그 확인
vercel logs

# 배포 목록
vercel list

# 프로젝트 삭제
vercel remove project-name
```

## 트러블슈팅 🔧

### 배포 실패시

1. `vercel.json` 설정 확인
2. 파일 권한 확인
3. `vercel login` 재인증

### 캐시 문제시

```bash
# 캐시 무효화
vercel --force

# 새로운 배포 생성
vercel --prod --force
```

---

**🎯 목표**: 1분 내 배포 완료!  
**📞 지원**: tech@vibecoding.com
