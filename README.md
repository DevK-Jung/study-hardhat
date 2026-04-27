# Hardhat Example - 학습용 프로젝트

> **이 프로젝트는 Hardhat 및 Solidity 스마트 컨트랙트 개발을 학습하기 위한 예제입니다.**

## 개요

[Hardhat](https://hardhat.org/) 공식 샘플 프로젝트를 기반으로 한 학습용 저장소입니다.
간단한 `Lock` 컨트랙트를 통해 Hardhat의 컴파일, 테스트, 배포 흐름을 익힐 수 있습니다.

## 프로젝트 구조

```
hardhat-example/
├── contracts/
│   └── Lock.sol              # 메인 스마트 컨트랙트
├── ignition/
│   └── modules/
│       └── Lock.js           # Hardhat Ignition 배포 모듈
├── test/
│   └── Lock.js               # 테스트 코드 (Chai + Ethers.js)
├── hardhat.config.js         # Hardhat 설정 파일
└── package.json
```

## Lock 컨트랙트

지정한 시간(`unlockTime`)이 지나기 전까지는 이더를 출금할 수 없는 시간 잠금 컨트랙트입니다.

| 구성 요소 | 설명 |
|---|---|
| `unlockTime` | 잠금 해제 타임스탬프 |
| `owner` | 컨트랙트 소유자 (배포 주소) |
| `withdraw()` | 잠금 해제 후 소유자만 이더 출금 가능 |
| `Withdrawal` 이벤트 | 출금 시 금액과 시간을 기록 |

## 시작하기

### 요구사항

- Node.js >= 18
- npm >= 8

### 설치

```bash
npm install
```

### 컴파일

```bash
npx hardhat compile
```

### 테스트

```bash
npx hardhat test
```

### 로컬 노드 실행

```bash
npx hardhat node
```

### 로컬 노드에 배포

```bash
npx hardhat ignition deploy ignition/modules/Lock.js --network localhost
```

## 학습 포인트

- **Solidity 기초**: `payable`, `require`, `emit`, `transfer` 등 기본 문법
- **Hardhat 개발 환경**: 컴파일, 테스트, 로컬 노드 구성
- **Hardhat Ignition**: 모듈 기반의 스마트 컨트랙트 배포 방식
- **Ethers.js + Chai**: 컨트랙트 단위 테스트 작성
- **Fixture 패턴**: `loadFixture`를 활용한 테스트 상태 재사용

## 기술 스택

- [Hardhat](https://hardhat.org/) v2.22
- [Solidity](https://soliditylang.org/) v0.8.27
- [Ethers.js](https://docs.ethers.org/) v6
- [Chai](https://www.chaijs.com/) (테스트 어서션)
- [Hardhat Ignition](https://hardhat.org/ignition) (배포 관리)

## 참고 자료

- [Hardhat 공식 문서](https://hardhat.org/docs)
- [Solidity 공식 문서](https://docs.soliditylang.org/)
- [Hardhat Ignition 가이드](https://hardhat.org/ignition/docs/getting-started)
