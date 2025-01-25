### `services/`

**역할**

- `services` 디렉토리는 UI와 직접 연결되지 않는 **핵심 로직과 데이터 관리**를 담당

**주요 기능**

- **API 호출**: 서버 통신 처리
- **데이터 가공**: API 응답 데이터를 사용하기 적합한 형태로 변환
- **비즈니스 로직**: 특정 도메인의 작업 흐름 처리
- **상태 관리**
- **공통 유틸 함수**

**_services 디렉토리 구조 예시_**

```
services/
  ├── api.ts           // API 호출 함수 (fetch, post 등)
  ├── store.ts         // 상태 관리
  ├── hooks.ts         // 커스텀 훅
  └── utils.ts         // 공통 유틸 함수
```

- `api.ts`: API 호출 함수 모음.
- `auth.ts`: 로그인 및 인증 관련 로직.
- `dataProcessor.ts`: 데이터 변환 및 가공.
- `state.ts`: 상태 관리 로직.
- `utils.ts`: 공통 유틸 함수.

<br>

### `widget`

특정 페이지 혹은 화면에서 자주 사용되는 UI 단위

Q. shared/components에 공통 컴포넌트를 추가할 때, 재사용성 판단 기준?

1. 재사용 빈도:
   • 두 개 이상의 Feature 또는 페이지에서 반복적으로 사용될 가능성이 있는 경우, `shared/` 로 분리
   • 예: 버튼, 입력 필드, 카드 컴포넌트 등.

2. 역할의 독립성:
   • 특정 Feature에 의존하지 않고, 일반적인 역할을 수행하는 컴포넌트라면 `shared/`에 배치
   • 예: Modal, Dropdown, Snackbar.
