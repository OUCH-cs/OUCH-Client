# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Folder-by-Feature Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다. 아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더 구조

```
app/                          # expo 라우팅
├── (auth)                    # 인증 라우트 그룹
├── (tabs)                    # 탭바 라우트 그룹
├── _layout.tsx/              # RootLayout
├── +not-found.tsx/           # 404 Not found page

assets/                       # 정적 이미지 소스 관리
├── fonts/                    # 폰트 파일
├── icons/                    # 아이콘 (svg)
├── images/                   # 이미지 파일 (jpg, png, svg...)

features/                     # 주요 기능 단위
├── search/                   # 검색 기능
│   ├── ui/                   # 검색 관련 UI 컴포넌트
│   ├── services/             # API 호출, 상태관리, 비즈니스 로직
│   ├── lib/                  # 유틸 함수 및 커스텀 훅
│   ├── search.types.ts       # 로컬 타입 정의
│   └── consts/               # 로컬 상수 정의
├── auth/                     # 인증 기능
└── ...

shared/                       # 재사용 가능한 전역 리소스
├── components/               # 공용 컴포넌트 (Button, Modal 등)
├── config/                   # 환경 설정
├── consts/                   # 전역 상수
├── lib/                      # 공용 유틸함수 및 커스텀 훅
│   ├── utils/                # 유틸함수
│   └── hooks/                # 커스텀 훅
├── styles/                   # 전역 스타일 관리
└── types/                    # 전역 타입

```

## 네이밍 컨벤션

### 폴더명

- **kebab-case**: `auth`, `(tabs)`

### 컴포넌트 파일명

- **PascalCase**: `Modal.tsx`
  - 단, 페이지 파일은 expo routing 규칙에 따라 소문자로만 명명: `sign-up.tsx`

### 파일 내 변수 및 함수

- **camelCase**: `userProfile`

### 커스텀 훅

- **use**로 시작: `useToggle`

### 상수

- **SCREAMING_SNAKE_CASE**: `USER_AUTH`

### 타입 파일

- 파일명 끝에 **.types.ts**: `user.types.ts`
  - 전역 타입은 `shared`에, 로컬 타입은 각 도메인 별로 관리
  - 인터페이스는 **I** 접두사 사용: `IUser`

<br>
<br>

**Layer 기본 원칙**

> Layer 원칙 1: 자신보다 아래 단계의 개체에만 접근 가능

> Layer 원칙 2: 위계가 낮은 컴포넌트일수록 영향을 받는 곳이 많기 때문에 독립적이며 범용적으로 사용할 수 있도록 구성

<br>

### `app/`

<br>

`app/../_layout.tsx`

- 하위 페이지들에 공통적으로 적용되는 전역 레이아웃 제공
- 페이지 전체에 걸쳐 반복적으로 사용되는 공통 구조 제공
- 최상위 레벨의 스코프

<br>

`app/../page[도메인명].tsx`

- 각 페이지의 진입점 역할
- 특정 URL에 매핑된 개별 페이지 담당
- features, widgets 등을 조립하여 화면 구성

  > 페이지 자체의 기능 구현 보다는 **필요한 Feature와 shared/components을 조합하여 배치**하는 역할에 집중

 <br>

### `features/ui`

**역할**

- 특정 기능에 종속된 UI 컴포넌트
- 상태나 비즈니스 로직 등과 밀접하게 연관된 기능 단위의 UI
- 재사용성 낮음

**예시**

- `LoginForm`, `UserCard`

```
import React from "react";
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../model/useAuth";

export function LoginForm() {
  const { login, isLoading } = useAuth();

  return (
    <View >
      <TextInput placeholder="이메일" keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="비밀번호" secureTextEntry autoCapitalize="none" />
      <TouchableOpacity
      onPress={login}
      disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text>로그인</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

```

<br>

### `shared/components/`

**역할**

- 독립적이고 범용적인 공통 컴포넌트
- 가장 높은 재사용성을 갖는 순수 UI
- 모든 레이어에서 재사용 가능한 **가장 낮은 레벨의 UI 단위**

> 컴포넌트는 독립적이며 상태를 가지지 않도록 설계

**예시**

- `Button`, `Modal`, `InputField`

<br>
<br>

> Layer 단위로 관심사 분리

| **폴더**              | **역할**                              | **스코프**                 | **레벨**                                            |
| --------------------- | ------------------------------------- | -------------------------- | --------------------------------------------------- |
| **layout.tsx**        | 전역 레이아웃 관리                    | 앱 전체                    | 최상위                                              |
| **page.tsx**          | 페이지별 콘텐츠와 구성                | 특정 URL에 해당하는 페이지 | `features/ui`와 `shared/components`를 조합하여 구성 |
| **features/ui**       | 특정 Feature에 종속된 UI 컴포넌트     | Feature 내부               | 중간                                                |
| **shared/components** | 전역적으로 재사용 가능한 기본 UI 요소 | 앱 전체                    | 가장 낮음                                           |

- 프로젝트 규모 및 코드 구조의 복잡성 등의 고려하여 FSD Layer 중 `widgets`와 `entities`는 채택하지 않음

<br>

## Segments

기능별 코드를 역할에 따라 분리하여 유지보수성과 가독성을 높이는 데 목적을 둠

**`ui`**

- UI 인터페이스
- 화면에 표시되는 컴포넌트, 레이아웃, 스타일이 포함된 UI 구성 요소

  ```
  features/auth/ui/
  ├── AuthForm.tsx
  ```

**`types`**

- 로컬 타입 정의
- 해당 features에서 사용하는 데이터 구조와 타입

  ```
  features/auth/
  ├── auth.types.ts  # 단일 타입
  ```

  ```
  features/auth/types/  # 여러 타입
  ├── auth.types.ts
  ├── user.types.ts
  ```

**`lib`**

- 커스텀 훅 및 유틸 함수 관리
- 특정 features 내부에서만 재사용 되는 함수나 로직 추상화

  ```
  features/diagnosis/lib/
  ├── useToggle.ts
  ```

**`services`**

- API 호출 및 데이터 가공
- 상태 관리
- 비즈니스 로직

  ```
  features/saerch/services/
  ├── searchApi.ts         # API 호출
  ├── searchStore.ts       # 상태 관리
  ```

**`consts`**

- 고정된 상수 관리

<br>

> - 모든 Segment를 반드시 사용할 필요는 없음.
> - **필요에 따라 유연하게 선택적으로 구성**하여 각 기능의 요구사항에 맞게 사용.
